// import express from 'express';
const express = require('express')
const app = express();
const bookstore = require('./mongo-setup.js');
const router = require('../BooksApi/routes/books/books-routes');

app.use(express.json());
app.use(router);









































// assigning to port
app.listen(3000,()=>
{
    console.log("Server is up on port 3000")
})