import express from 'express';
import { Book } from '../bookModels.js';
import statusCodes, { StatusCodes } from 'http-status-codes'

const bookRoute = express.Router();



bookRoute.get("/book", async (req, res) => {
    try {
        const book = await Book.find();
        if (!book)
            return res.json({ msg: "Books not found" });
        res.status(StatusCodes.OK).json({ count: book.length, data: book });
    }
    catch (error) {
        console.log(error);
    }
})

bookRoute.post("/book", async (req, res) => {
    try {
        const { title, author, year } = req.body;
        if (!title || !author || !year) {
            return res
                .status(StatusCodes.BAD_REQUEST)
                .json({ msg: "Please provide all fields" });
        }
        await Book.create(req.body);
        res.status(StatusCodes.CREATED).json({ msg: "Book Added", data: req.body });
        // req.json({ msg: "Book Added" });
    }
    catch (error) {
        console.log(error);
    }
})

bookRoute.get("/book/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            res
                .status(statusCodes.NOT_FOUND)
                .json({ msg: `Book with ${id} not found` });
        }
        res.status(statusCodes.OK).json({ msg: "BOok found", book });
    }
    catch (error) {
        res
            .status(StatusCodes.NOT_FOUND)
            .json({ msg: `Book with ${id} not found` });
    }
})

bookRoute.delete("/book/:id", async(req, res) => {

    const { id } = req.params;
    try {
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            res
                .status(statusCodes.NOT_FOUND)
                .json({ msg: `Book with ${id} not found` });
        }
    }
    catch (error) {
        res
            .status(StatusCodes.NOT_FOUND)
            .json({ msg: `Book with ${id} not found` });
    }
    res.send("Delete Book");
})

bookRoute.put("/book/:id", async(req, res) => {
    const { id } = req.params;
    const {title, author, year} = req.body;
    try {
        if (!title || !author || !year) {
            return res
                .status(statusCodes.NOT_FOUND)
                .json({ msg: "Please Provide All Data"});
        }
        const result = await Book.findByIdAndUpdate(id, req.body);
        if(!result){
            return res 
                    .status(statusCodes.BAD_REQUEST)
                    .json({msg: "Book not found"});
        }
        return res.status(statusCodes.OK).json({msg: "Book update", result});
    }
    catch (error) {
        res
            .status(StatusCodes.BAD_REQUEST)
            .json({ msg: `Book not found` });
    }
})


export default bookRoute