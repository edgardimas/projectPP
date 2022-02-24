const {User, UsersDetail} = require('./models');

// console.log(UsersDetail)

//npx sequelize-cli model:generate --name Product --attributes productname:string,stock:string,price:string,description:text

//npx sequelize-cli model:generate --name Transactions --attributes UserId:integer,ProductsId:integer

//npx sequelize-cli model:generate --name Users --attributes name:string,password:string,email:string,Role:string

//npx sequelize-cli model:generate --name UsersDetails --attributes profilePict:string

//npx sequelize-cli migration:generate --name add-fk-to-product

//npx sequelize-cli migration:generate --name add-fk-to-

// const fs = require('fs');

// let data = JSON.parse(fs.readFileSync('./data.json'))

// data.forEach(x => {
//     x.UpdatedAt = new Date(),
//     x.CreatedAt = new Date()
// });

//return Product.create({title: 'Chair', user: {}}, {include: [{association: Product.User,include: [ User.Addresses ]}]})
    ;

    // User.findAll({
    //     include: [
    //         { 
    //             model: UsersDetail
    //         }
    //     ]
    // })
    // .then (result => {
    //     console.log(result)
    // })
    // .catch (err => {
    //     console.log(err)
    // })