const { User, Product, Category, UsersDetail } = require('../models');
const { Op } = require('sequelize')
const bcryptjs = require('bcryptjs');
const formatted = require('../helper/format.js')

const initializePassport = require('../passport-config');
const passport = require('passport');
// initializePassport(passport, email => {
//     return UsersDetail.fin(user => user.email === email)
// })

class Controller {
    static forwarding(req, res) {
        res.redirect('/home')

    }

    static home(req, res) {
       const { search1 } = req.query
       console.log(req.query)
           
       Product.findAll({
           include: 
           [{
               model: Category,
               require: false
           }],
           where: [search1 ? {
               productname: {
                   [Op.iLike]: `%${search1}%`
                }
           } : {
            productname: {
                [Op.iLike]: `%%`
            }
        }]
       })
       .then(result => {
           res.render("index", {data:result, formatted})
       })
       .catch(err => {
           res.send(err)
           console.log(err)
        })
    }

    static loginForm(req, res) {
        res.render('login')
    }

    static logedIn(req,res){
        const {username, password} = req.body

        User.findOne({where: (username)})
        .then(user => {
            if(user){
                const isValidPassword = bcryptjs.compareSync(password, user.password)
                if(isValidPassword){
                    return res.redirect('/')
                } else {
                    const error = "invalid username/password"
                    return res.redirect(`/loginForm?error=${error}`)
                }
            }

        })
        .carch(err => res.send(err))
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
        // try {
        //     let { name, password, email, Role, profilePict} = req.body
        //     const hashedPassword = await bcryptjs.hash(password, 10)
            
        //     User.create({
        //         name: name,
        //         password: hashedPassword,
        //         email: email,
        //         Role: Role,
        //         UsersDetail: {
        //             profilePict: profilePict
        //         }
        //     }, {
        //         include: [ UsersDetail ]
        //     })
        //     .then(() => {
        //         res.redirect('/home')
        //     })
        //     .catch(err => {
        //         res.send(err)
        //         console.log(err)
        //     })

        // }

        // catch{
        //     res.redirect('/register')
        // }

        const {name, profilePict, email, password, Role} = req.body

        //console.log(u)

        User.create({name, profilePict, email, password, Role})
        .then(newUser => {
            res.redirect('/login')
        })
        .catch(err => res.send(err))
        

    }

    static productAddForm(req, res){
        res.render('addproduct')
    }

    static productAdd(req, res){
        let { productname, stock, productPicture, price, description, CategoryId } = req.body
        console.log(req.body)
        Product.create({
            productname: productname,
            productPicture: productPicture,
            stock: stock,
            description: description,
            price:price,
            CategoryId: CategoryId
        })
        .then(() => {
            res.redirect('/home')
        })
        .catch(err => {
            res.send(err)
            console.log(err)
        }) //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,, PRODUCT ADD
    }

    static productEditForm(req, res){
        //console.log(req.body)
        const { id } = req.params
        Product.findByPk(id)
        .then((data) => {
            res.render('editproductForm', { data })
        })
        .catch(err => {
            res.send(err)
        })

    }

    static productEdit(req, res){

        console.log(req.params, '<<<<<<<< req.params')
        const id = req.params.id
        const { productname, stock, productPicture, price, description, CategoryId } = req.body
        Product.update({
            productname,
            stock,
            productPicture,
            price,
            description,
            CategoryId
        }, {
            where: {
                id: +id
            }
        })
        .then(() => {
            res.redirect('/home')
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
            res.redirect('/home')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static buyProduct(req, res) {
        const id = req.params.id
        Product.findByPk(id)
        .then(product => {
            return product.update({stock: product.stock - 1})
        })
        .then( () => {
            res.redirect('/home')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = Controller