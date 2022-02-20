const Book= require('../models/Book');

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
    await newbook.save();
    console.log(newbook);
res.json(({
    message: 'save a new book!',
    data: newbook
}))
};

