import express, { Request, Response } from "express";
const app = express();
import cors from 'cors';

// Route
import file from './routes/file.route';

const port = process.env.PORT || 3000;

app.use(cors({
    origin: '*'
}));

app.get('/', (req: Request, res: Response) => {
    res.send("<h1>it is working from web</h1>")
});

// ***************** Route File *****************
app.use('/file', file);

// ***************** Start the server *****************
app.listen(port, () => {
    console.log(`server is running http://localhost:${port}/`);
});
