const coment = require('../models/coments');
const path = require('path')
const { unlink } = require('fs-extra');
const { fs} = require('fs');

exports.readall = async (req, res) => {
    
    const Coment = await coment.find();
    res.json(Coment)
}


exports.createcoment = async (req, res) => {

    console.log(req.body)

    const { title, post} = req.body;
    const newComent = new coment({
        title,
        post,
       // image
    });
    
    await newComent.save();
    console.log(newComent);
    res.json(({
        message: 'save a new Post!',
        data: newComent
    }))
    
    
   

};

exports.delatecoment = async (req, res) => {
    const Coment = await coment.findByIdAndDelete(req.params.id);
    console.log(Coment);
    //  try {unlink(path.resolve('../public'+book.Path));}
    //  catch(err){
    //      console.log(err);
    //  }
    res.json({
        message: "delating whit succes!!",
        data: Coment

    });
}

exports.updatecoment = async (req, res) => {
    const { title, author, isbn } = req.body;
    let coment = await Book.findById(req.params.id);
    console.log(coment);
    book.title = title;
    book.post = post;
    book.save();
    res.json({
        message: "update",
        data: coment

    })
    
}

