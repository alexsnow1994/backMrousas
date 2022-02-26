
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