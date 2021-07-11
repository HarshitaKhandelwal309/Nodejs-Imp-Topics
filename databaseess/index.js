// console.log("helo");

// const express = require("express");
import express from 'express';
const app = express();
app.listen(8080,function()
{
    console.log("server setup");
})

// const mongoose = require('mongoose');
import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://archit:coolarchit09@cluster0.lnp3r.mongodb.net/friends?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then((data)=>
{
    console.log("connected");
}).catch((error)=>
{
    console.log("not connected");
});

// const veg = mongoose.Schema({
//     name : {
//         type:String
//     },
//     price:{
//         type:Number
//     }
// })

// const vegs =  mongoose.model('veg',veg);

// const potato = new vegs({
//     name:"allu",
//     price:45
// });

// potato.save()
// .then((data)=>
// {
//     console.log(data)
// }).catch((err)=>
// {
//     console.log("sorry");
// });


// vegs.find({name:'allu'},function(err,data)
// {
//     if(err){
//         console.log("try again");
//     }
//     else
//     {
//         console.log(data);
//     }
// 