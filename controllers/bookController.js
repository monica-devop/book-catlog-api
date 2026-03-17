const Book = require("../models/Book")

exports.createBook = async (req,res) => {

    try{

        const book = await Book.create(req.body)

        res.status(201).json(book)

    }
    catch(err){
        res.status(500).json({message:"Error creating book"})
    }
}


exports.getAllBooks = async (req,res) => {

    try{

        const books = await Book.find()

        res.json(books)

    }
    catch(err){
        res.status(500).json({message:"Error fetching books"})
    }
}


exports.getBookById = async (req,res) => {

    try{

        const book = await Book.findById(req.params.id)

        if(!book){
            return res.status(404).json({message:"Book not found"})
        }

        res.json(book)

    }
    catch(err){
        res.status(500).json({message:"Error"})
    }
}


exports.updateBook = async (req,res) => {

    try{

        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )

        res.json(book)

    }
    catch(err){
        res.status(500).json({message:"Error updating"})
    }
}


exports.deleteBook = async (req,res) => {

    try{

        await Book.findByIdAndDelete(req.params.id)

        res.json({message:"Book deleted"})

    }
    catch(err){
        res.status(500).json({message:"Error deleting"})
    }
}