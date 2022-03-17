
const {Schema, model}= require('mongoose');
const express = require('express')

const ComentsSchema = new Schema ({
    created_at: {type: Date, default: Date.now},
    title: { type: String, required : true},
    post: {type: String, required : true},
});

    

module.exports=model('coment',ComentsSchema )