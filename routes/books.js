const { Router } = require('express');
const router = Router();
const {unlink} = require('fs-extra');
const path = require('path');
const {outputFile} =require('fs-extra')
const { title } = require('process');

const Book = require('../models/Book')

router.get('/', async(req, res) => {
    let book = await Book.find();
    res.json(book);
})
router.post('/', async(req, res) => {
    const { title, author, isbn } = req.body;
    const imagePath = '/uploads/'+req.file.filename;
    const newbook = new Book({ title, author, isbn,imagePath});
    await newbook.save()
    console.log(newbook);
    res.json({ message: 'save book' });
})
router.put('/:id', async(req,res)=>{
    console.log(req.params.id);
    console.log(req.body);
    const { title, author, isbn } = req.body;
    const imagePath = '/uploads/'+req.file.filename;
    let book= await Book.findById(req.params.id);
    book.title = title
    book.author = author
    book.isbn = isbn
    book.imagePath = imagePath
    book.save()
    try {
        outputFile(path.resolve('./backEnd/public'+book.imagePath));
    } catch (error) {
        console.log(error);
    }
      console.log(book);
      res.json({messaje:'Done'});
      
    
  });

router.delete('/:id', async(req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
   try {unlink(path.resolve('./backEnd/public'+book.imagePath));}
   catch(err){
       console.log(err);
   }
    console.log(book);
    res.json({ message: 'delating' })
})


module.exports = router;