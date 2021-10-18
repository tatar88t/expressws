import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import postRoutes from './routes/postRoutes.js';

const app = express();
const PORT = '8000';

app.get('/', (req, res) => {
    res.send('INDEX')
});

// app.use(bodyParser.json({ limit: '30mb', extended: true }))]
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/posts', postRoutes);

app.use((req, res, next) => {
    console.log(`request recieved from at ${Date.now()}`)
    next();
})

app.get('*', (req, res) => {
    res.send('WRONG URL');
});

// app.listen(PORT);
const DB_CONNECTION_URL = "mongodb+srv://tatar:asd123@cluster0.yutbe.mongodb.net/expressTesting?retryWrites=true&w=majority"

mongoose.connect(DB_CONNECTION_URL).then((res) => app.listen(PORT, () => console.log(res, `Server running on port ${PORT}` ) ))