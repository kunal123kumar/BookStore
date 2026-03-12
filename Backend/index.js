import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// routes
import bookRoutes from "./routes/books.route.js";
import userRoutes from "./routes/user.route.js";
import contactUsRoutes from "./routes/contactUs.route.js";



dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3001;


try {
    await mongoose.connect(process.env.MONGO_URL); 
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error connecting to MongoDB:", error);
}

// Define routes
app.use("/book", bookRoutes);
app.use("/user", userRoutes);
app.use("/contactUs", contactUsRoutes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});