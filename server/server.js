import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js';

// app config
const PORT = process.env.PORT || 8000;
const app = express();

//Initialize middlewares
app.use(express.json());
app.use(cors());
await connectDB()

//API routes
app.get('/', (req, res) => res.send("API Working"))

app.listen(PORT, () => {
    console.log("Server is Listening on port " + PORT);

});