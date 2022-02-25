// const { Router } = require('express');
// const router = Router();


// const user = require('../models/Book')

// router.get('/', async(req, res) => {
//     let book = await user.find();
//     res.json(user);
// })
// router.post('/', async(req, res) => {
//     const { usuario, email, password } = req.body;
    
//     const newuser = new user({ title, author, isbn, imagePath });
//     await newuser.save()
//     console.log(newbook);
//     res.json({ message: 'save book' });
// })
// router.update('/:id', async(req, res)=> {

// });

// router.delete('/:id', async(req, res) => {
//     const book = await user.findByIdAndDelete(req.params.id)
//     console.log(book);
//     res.json({ message: 'delating' })
// })


// module.exports = router;
const express	= require("express")
const router	= express.Router()	

const userController	= require("./../controllers/usersController")

const authorization 	= require("./../middleware/authorization")

const { check } = require("express-validator")

router.post("/create", [
	check("name", "El nombre es obligatorio.").not().isEmpty(),
	check("email", "Agrega un email válido").isEmail(),
	check("password", "El password debe ser mínimo de 6 caracteres").isLength({ min: 6 })
]
, userController.create)

router.post("/login", userController.login)

router.get("/verifytoken", authorization, userController.verifyToken)

module.exports = router