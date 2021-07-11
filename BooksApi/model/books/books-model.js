const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bookSchema = new schema(
    {
        BookName:
        {
            type:String,
            unique:true
        },
        Price:
        {
            type:Number
        },
        Author:
        {
            type:String
        },
        Language:
        {
            type:String
        },
        AboutAuthor:
        {
            type:String
        }


    }
);


const bookstore = mongoose.model("bookstore" ,bookSchema )
module.exports = {bookstore} ;