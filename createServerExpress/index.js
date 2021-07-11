// console.log("hey");
const express = require('express');
const app =  express();
app.listen(4000,function(){
    console.log("hello harshiii");
})


app.use(express.json());

// get post put  delete

app.get("/hellofriend",function(request,response)
{
    response.send("hello world");
})

//params and queryy

app.get("/hello/:msg/:friend/age", function(request,response)
{
    console.log(request,request.param);
    response.send("greaattt");
})

app.get("/get/friend",function(request,response)
{
    console.log("Welcome");
    console.log(request.query);
    response.send(request.query);
}) 

const dummyData =  [{name:"Archit" , age:22},{name:"chinki" , age :21}]
app.get("/assignment/:name/:age" , (request,response)=>
{
    console.log(request.params);
    console.log("assignment");

    
    console.log(request,request.params);
    response.send(request.params);
    response.send("done");
    
console.log(request.params.age);
dummyData.push(request.params)
response.send(dummyData)
console.log(dummyData)

})



//post method

app.post("/add/friend",(request,response)=>

{
    console.log("hitting post api");
     console.log("body" , request.body); // we have to parse body
     dummyData.push(request.body);
     response.send(dummyData)
}) 








// const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://archit:coolarchit09@chinki.h9uvn.mongodb.net/myArchit?retryWrites=true&w=majority",
// {   useNewUrlParser: true,
//    useUnifiedTopology: true,
//   useFindAndModify:false,
//   useCreateIndex:true
// }).then((data)=>

// console.log("connectes")
// ).catch((error)=>
//     console.log("not connected")

// )

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

// potato.save();


// vegs.find({name:'allu'},function(err,data)
// {
//     if(err){
//         console.log("try again");
//     }
//     else
//     {
//         console.log(data);
//     }
// })