const { Router } = require('express');
const router = Router();
// const {unlink} = require('fs-extra');
// const path = require('path');
// const {outputFile} =require('fs-extra')
// const { title } = require('process');
const comentscontroller = require('../controllers/comentsController')




router.get("/readall", comentscontroller.readall);

router.post("/createcoment", comentscontroller.createcoment);


router.delete("/:id", comentscontroller.delatecoment);

router.put("/:id", comentscontroller.updatecoment);



module.exports = router;