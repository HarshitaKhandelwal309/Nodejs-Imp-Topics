//create server

const express = require('express');
const app = express();

// require mongofile
const dbConnection = require('./mongoSetup');
//require routesfile
const router = require('../friendList/routes/friend/friend-routes')

app.use(express.json());
app.use(router);
// app.use(friendModel);




//assigned port

app.listen(8080,()=>
{
    console.log("server is on port 8080");
})








