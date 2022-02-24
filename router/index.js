const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')
const bcrypt = require('bcrypt');


router.get('/', Controller.forwarding)
router.get("/home", Controller.home)
router.get('/register', Controller.registerForm)
router.post('/register', Controller.registered)
router.get('/login', Controller.loginForm)
router.get('/profile/:id', Controller.profileUser)
router.get("/products/add", Controller.productAddForm)
router.post("/products/add", Controller.productAdd)
router.get("/products/edit/:id", Controller.productEditForm)
router.post("/products/edit/:id", Controller.productEdit)
router.get("/products/buy/:id", Controller.buyProduct)
router.get("/products/delete/:id", Controller.productDelete)

module.exports = router;