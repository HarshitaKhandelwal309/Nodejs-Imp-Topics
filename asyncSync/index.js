// this is synchronous as one task done then only it will move forward
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

//asynchronous me hum jo statement event drive programming language he 
//jo statement jada tym le rhi he use 
//chod ke dusro ko execute kro uske baad
//ye ho jayegi

console.log("1");
setTimeout(()=>
{
    console.log("It is set time out1 ","hello");
},2000)
console.log("2");

setTimeout(()=>
{
    console.log("It is set time out2 ","hii");
},2000)


console.log("4");
setTimeout(()=>
{
    console.log("It is set time out3 ","bye");
},2000)
console.log("5");


//