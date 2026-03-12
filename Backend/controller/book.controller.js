import Book from "../models/book.model.js";

export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.log("Error fetching books:",error);
        res.status(500).json({ error: error.message });
    }
};