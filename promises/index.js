const dummyData = [
    {title:"Greet" , message:"Hello"} ,
    {title:"Namaste" , message:"Jai Shree Krishna"}
]

const retrieval = (status)=>
{
    return new Promise((resolve, reject)=>
    {
        setTimeout(() => {
            if(status===200)
            {
                resolve(dummyData);

            }
            else
            {

                reject("Data is not found");
            }
        }, 2000);
    });
   
}
retrieval(400).then((data)=>
{
    console.log("data " , data)

}).catch((err)=>
{
console.log("error" , err)
}
)








const age  = [
    {Name:"Harshi", age:21, DOB:1999},
    {Name:"Archit", age:22, DOB:1998}
    
]
// const vote = [{area:"azad Nagar"},{area:"Gokul Dham Society"}]


const election = function(status)
{
// this api hit returns promise 
return new Promise(function (resolve, reject) {
    setTimeout(() => {
        if(status===200)
        {
            resolve(age);
        }
        else
        {
            reject("something went wrong ");
        }
    }, 2000);
})
}

const Ward = function(status)
{
// this api hit returns promise 
return new Promise(function (resolve, reject) {
    setTimeout(() => {
        if(status===200)
        {
            resolve(vote);
        }
        else
        {
            reject("something went wrong ");
        }
    }, 2000);
})
}

election(400).then(function(data) {
    console.log("Our data is ", data)
    // Ward(200).then(function(data) {
    //     console.log("Your area is ", data)
    // }).catch(function(error) {
    //     console.log("check your id");
    // })
}).catch(function(error)
{
    console.log("error", error);
});