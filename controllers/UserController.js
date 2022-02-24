const {User} = require('../models');

const bcrypt = require('bcrypt');


class UserController {
    static postLogin (req, res){
        const {username, password} = req.body

        User.findOne({where: (username)})
        .then(user)
    }
}