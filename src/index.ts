import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser'

// initialize configuration
dotenv.config();

const app: Application = express();
const port = process.env.SERVER_PORT || 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Express Typescript 4.0');
});
app.listen(port, () => {
    // tslint:disable-next-line: no-console
    console.log(`server started at http://localhost:${port}`);
});