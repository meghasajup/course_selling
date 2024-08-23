import express from 'express'
import apiRouter from './routes/index.js';
import { connectDB } from './config/db.js';
import cookieParser from 'cookie-parser';

const app = express()
app.use(express.json())
app.use(cookieParser()) 

const port = process.env.PORT;
connectDB()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', apiRouter)

app.all("*", (req, res, next) => {
    res.status(404).json({ message: "end point does not exist" });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})