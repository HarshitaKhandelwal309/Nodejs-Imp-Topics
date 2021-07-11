const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Harshii:coolarchit09@todolist.9wftd.mongodb.net/myToDo?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then((data)=>console.log("connected to database"))
.catch((error)=>console.log("Not Connected"));

const schema = mongoose.Schema;
const ToDo = new schema(
    {
        Date:
        {
            type:String

        },
        Task:
        {
            type:String
        },
        status:
        {
            type:String
        }



    }
);

const ToDoList = mongoose.model("ToDoList" ,ToDo)
module.exports=(ToDoList);