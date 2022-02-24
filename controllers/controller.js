const { User, Product, Category, UsersDetail } = require('../models');
const { Op } = require('sequelize')
const bcrypt = require('bcrypt');

const initializePassport = require('../passport-config');
const passport = require('passport');
initializePassport(passport, email => {
    return UsersDetail.fin(user => user.email === email)
})

class Controller {
    static forwarding(req, res) {
        res.redirect('/home')

    }

    static home(req, res) {
        const { search, filter } = req.query
        let option = { }
        if (filter) {
            option.where = { productname: filter }
        }
        
        Product.findAll({
            include: 
            [{
                model: Category,
                require: false
            }],
            where: [search ? {
                name: {
                    [Op.iLike]: `%${search}%`
                }
            } : null],
            order: [['productname', 'ASC']],
        })
        .then(result => {
            res.render("index", {data:result})
        })
        .catch(err => {
            res.send(err)
        })

       
    }

    static loginForm(req, res) {
        res.render('login')
    }

    static profileUser(req, res) {
        const id = req.params.id;
        User.findByPk(id, {
            include: [{
                model: UsersDetail
            }, {
                model: Transaction
            }]
        })
        .then((data) => {
            res.render('profile', { data })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static registerForm(req, res) {
        res.render('register')
    }

    static async registered(req, res) {
        try {
            let { name, password, email, Role, profilePict} = req.body
            const hashedPassword = await bcrypt.hash(password, 10)
            
            User.create({
                name: name,
                password: hashedPassword,
                email: email,
                Role: Role,
                UsersDetail: {
                    profilePict: profilePict
                }
            }, {
                include: [ UsersDetail ]
            })
            .then(() => {
                res.redirect('/home')
            })
            .catch(err => {
                res.send(err)
                console.log(err)
            })

        }

        catch{
            res.redirect('/register')
        }
    }

    static productAddForm(req, res){
        res.render('addproduct')
    }

    static productAdd(req, res){
        let { productname, stock, productPicture, price, description, CategoryId } = req.body
        Product.create({
                include: [{
                    model: Category,
                    require: true
                }],
            productname: productname,
            productPicture: productPicture,
            stock: stock,
            description: description,
            CategoryId: CategoryId
        })
    }

    static productEditForm(req, res){
        res.render('editproductForm')
    }

    static productEdit(req, res){
        const id = req.params.id
        Product.findByPK(id, {
            include: [{
                model: Category,
                require: false
            }],
        })
        .then((data) => {
            res.render('editproductForm', { data })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static productDelete(req,res){
        const id = req.params.id
        
        Product.destroy({
            where: {
                id: id
            }
        })
        .then(() => {
            res.redirect('/products/list')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = Controller