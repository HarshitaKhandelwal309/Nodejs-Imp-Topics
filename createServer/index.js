// console.log("hello chiks and chits");
//create server 
const http = require("http");
http.createServer(function (request, response)
{
// console.log("harshii");
// resp.write("hello chinkiii");
// resp.end();
console.log("request" , request.method , request.url)

if(request.method==="GET" && request.url==="/get/friend")
{
    console.log("data is fetched");
}
if(request.method==="POST" && request.url==="/add/friend")
{
    console.log("data is fetched");
}
 else if(request.method==="PUT" && request.url==="/update/friend")
{
    console.log("data is fetched");
}
 else if(request.method==="DELETE" && request.url==="/delete/friend")
{
    console.log("data is fetched");
}

else
{
    console.log("No api hits");
}

}).listen(8080);
