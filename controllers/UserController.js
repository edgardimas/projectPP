const {User} = require('../models');

const bcryptjs = require('bcryptjs');


class UserController {

    static loginForm(req, res){
        res.render('login')
    } 

    static registerForm(req, res){

        res.render('register')

    }

    static postRegister (req, res){
        
        const {username, password, role} = req.body

        User.create({username, password, role})
        .then(newUser => {
            res.redirect('/login')
        })
        .catch(err => res.send(err))
        
    }


    static postLogin (req, res){
        const {username, password} = req.body

        User.findOne({where: (username)})
        .then(user => {
            if(user){
                const isValidPassword = bcryptjs.compareSync(password, user.password)
                if(isValidPassword){
                    return res.redirect('/')
                } else {
                    const error = "invalid username/password"
                    return res.redirect(`/login?error=${error}`)
                }
            }

        })
        .carch(err => res.send(err))
    }
}

module.exports = UserController