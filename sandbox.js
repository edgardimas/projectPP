//npx sequelize-cli model:generate --name Product --attributes productname:string,stock:string,price:string,description:text

//npx sequelize-cli model:generate --name Transactions --attributes UserId:integer,ProductsId:integer

//npx sequelize-cli model:generate --name Users --attributes name:string,password:string,email:string,Role:string

<<<<<<< HEAD
//npx sequelize-cli model:generate --name UsersDetails --attributes profilePict:string

//npx sequelize-cli migration:generate --name add-fk-to-product

//npx sequelize-cli migration:generate --name add-fk-to-

const fs = require('fs');

let data = JSON.parse(fs.readFileSync('./data.json'))

data.forEach(x => {
    x.UpdatedAt = new Date(),
    x.CreatedAt = new Date()
});

console.log(data)
=======
//npx sequelize-cli model:generate --name UsersDetail --attributes profilePict:string,UsersId:integer

//npx sequelize-cli model:generate --name Category --attributes name:string

//npx sequelize-cli migration:generate --name add-fk-to-product

//npx sequelize-cli migration:generate --name add-fk-to-product

//test
>>>>>>> 17939beb3dbadb1d3ee618834df3ea0506fe39bd
