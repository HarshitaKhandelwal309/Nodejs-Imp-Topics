const {bookstore} = require('../../model/books/books-model');

//add books to store

const addBooks = (request,response)=>
{
    const data = request.body;
    const addBooks= new bookstore
    (
        {
            BookName:data.BookName,
            Price:data.Price,
            Author:data.Author,
            Language:data.Language,
            AboutAuthor:data.AboutAuthor

        }
    )
    bookstore.exists({BookName:data.BookName})
    .then((data)=>
    {
        // console.log(data)
        if(data)
        {
            console.log("you can not insert")
            response.send("you cannot insert same book");
        }
        else
        {
            addBooks.save()

            .then((data)=>
            {
                console.log(data);
                response.send(data);
            })
            .catch((error)=>
            {
                console.log("error");
            })

        }
        
        
    })
    .catch((error)=>
    {
        console.log("something went wrong")
       

    })
}

// fetching all books details
const fetchBooks = (request,response)=>
{
    bookstore.find()
    .then((data)=>
    {
        response.send(data);
    })
    .catch((error)=>
    {
        response.send("Try again");
    })
}

//update details
const updateBooks = (request,response)=>
{
    const data = request.body;
    
    bookstore.exists({BookName:data.BookName})
    .then((flag)=>
    {
        if(flag)
        {
            bookstore.updateOne
            (
                {BookName:data.BookName},
                {$set:data}
            )
            .then((local_flag)=>
            {
                // console.log(data);
                console.log("updated successfully");
                // response.send({});
                //response.redirect('/fetch/books');
                bookstore.find({BookName:data.BookName})
                .then((record)=> response.send(record))
                .catch((err)=> response.send('oops error'))
            })
            .catch((error)=>
            {
                console.log("something went wrong")
            })


            }
            else
            {
                response.send("U can not update value")

            }
    })
    .catch((error)=>
    {
        console.log("no such book exists");
    })
}

//delete details
const deleteBooks = (request,response)=>
{const id = request.query._id;
    console.log(id);
    
    if(id)
    {
        bookstore.findByIdAndDelete({_id:id})
    
    .then((data)=>
    {
        if(data==null)
        {
            response.send("no such data is present in db");
        }
        else
        {
            response.send("deleted successfully");
            console.log(data);

        }
        
    })
    .catch((error)=>
    {
        response.send("something went wrong");
    })

   

    }
    else
    {
        console.log("enter Valid id plaese");
    }

}
//exports

module.exports ={addBooks,fetchBooks,updateBooks,deleteBooks
};