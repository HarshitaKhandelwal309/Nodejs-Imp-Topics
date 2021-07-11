const mongoose = require('mongoose');
const schema = mongoose.Schema;
//create a schema or object mapping

const friendSchema = new schema
(
    {

    
    friendName :
    {
        type:String
    } , 
    mobileNumber:
    {
        type:Number
    },
    address:
    {
        type:String
    },
    age :
    {
        type:Number
    }
    })

const friendModel =mongoose.model("friendModel" , friendSchema);
module.exports = {friendModel};