  require('dotenv').config()
// create server
const express= require('express');
const app = express();
// console.log(process.env.x)
app.use(express.json());
//require nodemailer

const nodemailer = require('nodemailer');

var user = "harshi.khandelwal30@gmail.com";
var password = process.env.EmailPassword ;


const mailTransporter = nodemailer.createTransport
(
    {
        service: "gmail",
        auth:
        {
            user:user,
            pass:password
        }

    }
)
app.post("/adding/details", (request,response)=>
{
     const data = request.body;
    console.log(data);
    const sendingDetails =
{
    from:data.from,
    to: data.to,
    subject:data.subject,
    text:data.text 
    

}

// })




mailTransporter.sendMail(sendingDetails)
.then((data)=>
{
    console.log("data sent")
    response.status(200).json({message:'mail sent'});
})
.catch((error)=>
{
    console.log("errror")
    response.status(422).json({message :'sorry mail not sent'});

})
})

const port = process.env.PORT | 3000

app.listen(port, function()
{
    console.log("server is on port 3000");
});




