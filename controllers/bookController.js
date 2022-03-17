const Book = require('../models/Book');
const path = require('path')
const { unlink } = require('fs-extra');
const { fs} = require('fs');

exports.readall = async (req, res) => {
    // await db.collection('mycollection').find().toArray((err, result) => {
 
    //     const imgArray= result.map(element => element._id);
    //           console.log(imgArray);
   
    //  if (err) return console.log(err)
    //  res.send(imgArray)
   
    // })
    const book = await Book.find();
    res.json(book)
}


exports.createbook = async (req, res) => {

    console.log(req.body)

    const { title, author, isbn } = req.body;
    const newbook = new Book({
        title,
        author,
        isbn,
       // image
    })
    console.log(newbook);
    // const imgage = fs.readFileSync(rq.file.path);
    // const encode_img=imgage.toString('base64');
    // codificando la imagen 
    
    // var finalImg = {
    //     contentType: req.file.mimetype,
    //     image:  new Buffer(encode_img, 'base64')
    //  };
    //  await db.collection('quotes').insertOne(finalImg,  (err, result) => {
    //   console.log(result)
   
    //   if (err) return console.log(err)
   
    //   console.log('saved to database')
    //   res.redirect('/createbook')
     
       
    // })

    await newbook.save();
    console.log(newbook);
    res.json(({
        message: 'save a new book!',
        data: newbook
    }))
};

exports.delatebook = async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    console.log(book);
    //  try {unlink(path.resolve('../public'+book.Path));}
    //  catch(err){
    //      console.log(err);
    //  }
    res.json({
        message: "delating whit succes!!",
        data: book

    });
}

exports.update = async (req, res) => {
    const { title, author, isbn } = req.body;
    let book = await Book.findById(req.params.id);
    console.log(book);
    book.title = title;
    book.author = author;
    book.isbn = isbn;
    book.save();
    res.json({
        message: "update",
        data: book

    })
}

