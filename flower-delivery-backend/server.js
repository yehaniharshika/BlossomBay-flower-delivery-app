import express from 'express'
import cors from "cors";
import { connectDB } from './config/db.js';

// app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//DB Connection
connectDB();

app.get('/',(req,res) => {
    res.send("API working")
});

app.listen(port,() => {
    console.log(`Server Started on http://localhost:${port}`);
})

//to run =npm run server
//mongodb+srv://yehani:<db_password>@cluster0.ieob0.mongodb.net/?