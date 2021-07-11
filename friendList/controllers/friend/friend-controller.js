 const {friendModel} = require('../../models/friend/friend-model');
//adding friends
const addFriends = (request,response)=>
{
    const data  = req.body;
    const friend = new friendModel
    ({
        friendName : data.friendName,
        mobileNumber : data.mobileNumber,
        address: data.address,
        age :data.age

        
    })
    friend.save()
    .then((data)=>{
        console.log("data" , data)
        res.send(data);
    })
    .catch((error)=>
    {
        console.log("something went wrong");
        res.send("something went wrong");
    })

};




//fetch all documents inside collection

const fetchingFriends = (request,response)=>
{
    friendModel.find()
    .then((data)=>
    {
        console.log(data)
    })
    .catch((error)=>
    {
        console.log("something went wrong");

    })
}

//find document using id and delete 

const deleteFriend = (request,response)=>
{
    const id =  request.query._id;
    friendModel.findByIdAndDelete({_id:id})
    .then((data)=>
    {
        response.send("deleted successfully")
    })

    .catch((error)=>
    {
        response.send("something went wrong");
    })
}

// update

const updateFriend = (request,response)=>
{
    const id = request.query._id;
    const data = request.body;
    console.log("data", data)
    friendModel.findByIdAndUpdate({_id:id},
        {$set: {friendName:data.friendName}},
        {new:true}
        
        )
        .then((data)=>
        {
            response.send("Data Updated");
        })
        .catch((error)=>
        {
            response.send("something went wrong");
        })
}


// find document using id

const gettingFriends = (request,response)=>
{
    const id = request.query._id;
    if(id)
    {
        friendModel.findOne({_id:id})
        .then((data)=>
        {
            
                console.log(data)
                response.send(data)

            
        })
        .catch((error)=>
        {
            console.log("something went wrong");
            response.send("something went wrong");
        });

    }
    
    else
    {
        console.log("invalid id!! Please enter correct id");
    }
}





//exports

module.exports ={gettingFriends, addFriends,fetchingFriends,deleteFriend,updateFriend
                     };