
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("server is on port 3000");
})
const ToDoList = require('./mongoetUp.js')
app.use(express.json()) //parse body


//add tasks in the db

app.post("/add/task", (request, response) => {
    const data = request.body;
    const dailyTasks = new ToDoList
        (
            {
                Date: data.Date,
                Task: data.Task,
                status: data.status

            }
        )

    dailyTasks.save()
        .then((data) => {
            console.log(data);
            response.status(200).send("Task added successfully")

        })
        .catch((error) => {
            response.send("something went wrong")
        })
});

//fetching all list

app.get("/getting/list", (request, response) => {
    ToDoList.find()
        .then((data) => {
            response.status(200).send(data);

        })
        .catch((error) => {
            response.send("something went wrong");

        })
})

//delete 

app.delete("/delete/todo", (request, response) => {
    const id = request.query._id;
    if (id) {
        console.log("valid id")


        ToDoList.findByIdAndDelete({ _id: id })
            .then((data) => {
                if(!data)
                {
                    console.log("couldn't get data")
                    response.send("couldn't get data")
                }
                else
                {
                    console.log(data)
                    response.send(data);
                }

            })
            .catch((error) => {
                console.log("something went wrong");
                response.send("something went wrong");


            })
    }

    else
    {
        console.log("invalid id");
    }


})


//update


app.put("/update/todo",(request,response)=>
{
    const id = request.query._id;
    const data = request.body;

if(id)
{

    ToDoList.findByIdAndUpdate({_id:id},
        {$set: {Task:data.Task , status:data.status}},
        {new:true})
        .then((data)=>
{
    console.log("updated successfully");
    response.send(data);
})
.catch((error)=>
{
    console.log("Something went wrong");
    response.send("Something went wrong");
})
}
else
{
    console.log("invalid id");
}

})

