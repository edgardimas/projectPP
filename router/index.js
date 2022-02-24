const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')
const bcrypt = require('bcrypt');

router.get('/', Controller.forwarding)
router.get("/home", Controller.home)
router.get('/register', Controller.registerForm)
router.post('/register', Controller.registered)
router.get('/login', Controller.loginForm)
// router.get('/profile/:id')
router.get("/products/add", Controller.productAddForm)
router.post("/products/add", Controller.productAdd)
// router.get("/products/buy/:id")
// router.get("/products/buy/:id")
router.get("/products/edit/:id", Controller.productEditForm)
router.get("/products/edit/:id", Controller.productEdit)

module.exports = router;