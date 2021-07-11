const express= require('express');
const router = express.Router();
const bookController = require('../../controller/books/books-controller')
router.use(express.json());

router.post("/add/books", bookController.addBooks);
router.get("/fetch/books" , bookController.fetchBooks);
router.put("/update/details",  bookController.updateBooks);
router.delete("/delete/details", bookController.deleteBooks);

module.exports =  router;