//npx sequelize-cli model:generate --name Product --attributes productname:string,stock:string,price:string,description:text

//npx sequelize-cli model:generate --name Transactions --attributes UserId:integer,ProductsId:integer

//npx sequelize-cli model:generate --name Users --attributes name:string,password:string,email:string,Role:string

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