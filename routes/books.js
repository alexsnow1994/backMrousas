const { Router } = require('express');
const router = Router();
// const {unlink} = require('fs-extra');
// const path = require('path');
// const {outputFile} =require('fs-extra')
// const { title } = require('process');
const bookcontroller = require('../controllers/bookController')




router.get("/readall", bookcontroller.readall);

router.post("/createbook",bookcontroller.createbook);

router.delete("/:id",bookcontroller.delatebook);

router.put("/:id", bookcontroller.update);



module.exports = router;