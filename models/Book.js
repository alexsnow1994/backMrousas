
const {Schema, model}= require('mongoose');
const express = require('express')

const BookSchema = new Schema ({
    created_at: {type: Date, default: Date.now},
    title: { type: String, required : true},
    author: {type: String, required : true},
    isbn: {type: String, required : true},
    image: {type: String}
    
});

module.exports=model('book',BookSchema )