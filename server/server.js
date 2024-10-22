// to start :- npm run server
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

// app config
const PORT = process.env.PORT || 8000;
const app = express();

//Initialize middlewares
app.use(express.json());
app.use(cors());
await connectDB();

//API routes
app.get('/', (req, res) => {
    res.send("API is Working")
   
});

app.use('/api/user', userRouter)
app.use('/api/image',imageRouter);

app.listen(PORT, () => {
    console.log("Server is Listening on port " + PORT);

});



