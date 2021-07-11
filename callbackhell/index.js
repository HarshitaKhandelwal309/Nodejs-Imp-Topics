
const studentData = [{Name:"Harshi" , age:21 , RollNo:"18100BTIT0377" , gender:"Female"},
{Name:"Archit" , age:22 , RollNo:"18100BTIT0378" , gender:"male"},
{Name:"Geetika" , age:20 , RollNo:"18100BTIT0380", gender:"Female"}
];

console.log(studentData[1]);


const studentDetail = ()=>

{

    
   setTimeout(() => {
    
    
        for(var i = 0 ; i<studentData.length; i++)
        {
            console.log(studentData[i].Name);
        }
  
    
    
     
setTimeout(() => {
    for(var i = 0 ; i<studentData.length; i++)
    {
        console.log(studentData[i].age);
    }
setTimeout(() => {
    for(var i = 0 ; i<studentData.length; i++)
    {
        console.log(studentData[i].gender);
    }
}, 1000);

}, 4000);

   }, 2000);

}
studentDetail(400);