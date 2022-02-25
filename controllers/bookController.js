const Book= require('../models/Book');
const path = require('path')
const {unlink} = require('fs-extra');

exports.readall= async (req,res) =>  {
    const book = await Book.find();
    res.json(book)
}

exports.createbook= async(req , res) =>{
    const {title ,author , isbn}= req.body;
    const newbook= new Book({
        title,
        author,
        isbn
    })
    console.log(newbook);
    await newbook.save();
    console.log(newbook);
res.json(({
    message: 'save a new book!',
    data: newbook
}))
};

exports.delatebook= async(req ,res)=>{
    const book = await Book.findByIdAndDelete(req.params.id);
    console.log(book);
    //  try {unlink(path.resolve('../public'+book.Path));}
    //  catch(err){
    //      console.log(err);
    //  }
     res.json({
         message: "delating whit succes!!",
         data: book         

     })
}

exports.update= async (req,res)=>{
    const{title,author,isbn}=req.body;
    let book= await Book.findById(req.params.id);
    book.title= title;
    book.author = author;
    book.isbn = isbn;
    book.save();
    res.json({
        message:"update",
        data: book

    })
}

