const mongoose = require('mongoose');
// const { type } = require('os');
mongoose.connect('mongodb+srv://Harshii:coolarchit09@friendkilist.s0nzl.mongodb.net/friendList?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then((data)=>console.log("connected to database"))
.catch((error)=>console.log("Not Connected"));

