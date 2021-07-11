//passing function as an argument in another function

// function hello()
// {
//     console.log("chinki");

// }
// function hii()
// {
//     console.log("archit");
// }
// hii();
// hello();
//jo function phle call hoga vhi phle output dega

// function hello()
// {
//     setTimeout(() => {
//         console.log("chinki");
//     }, 2000);
   

// }
// function hii()
// {
//     console.log("archit");
// }

// hello();
// hii();
//outpit archit chinki

//but if we want ki phle hume chinki hi mile 
//then we have to control flow
//using callbacks

// function hello(parameter)
// {
//     setTimeout(() => {
//         console.log("chinks");
//     }, 2000);


// parameter();
// }


// function hii()
// {
// console.log("archit");
// }
// hello(hii);


//iss according output aayega archit chinki

// function hello(parameter)
// {
//     setTimeout(() => {
//         console.log("chinks");
//         parameter();
//     }, 2000);
// }
// function hii()
// {
// console.log("archit");
// }

// hello(hii);


// two uses of callbacks
//1. to control flow
//2. for error handling

const post = [{title:"FName", id:"1"}, {title:"LName", id:"2"}];

// const getData = ()=>
// {
//     console.log(data);
// }
// getData();


// const getData = ()=>
// {
//     setTimeout(()=>
//     {
//         console.log(data);
//     },2000);
   
// }

// getData();
// console.log("I will");


// const getData = (status)=>
// {
//     setTimeout(()=>
//     {
//         if(status===200)
//         {
//             console.log(data);  
//         }
//        else
//        {
//            console.log("error try again")
//        }
//     },2000);
   
// }

// getData(400);
// console.log("I will");


const getData = (status, callbacks)=>
{
    setTimeout(()=>
    {
        if(status===200)
        {
            callbacks(undefined , post); 
        }
       else
       {
           
           callbacks("error" , undefined); 
       }
    },2000);
   
}

getData(200, function(error, data)
{
    if(error)
    {
        console.log("error" , error)
    }
    else{
        console.log("data" , data);
    }

});
console.log("I will");
