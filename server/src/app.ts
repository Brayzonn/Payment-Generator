import express from 'express';
import { Request, Response, NextFunction } from 'express'
import cors from 'cors'; 
const app = express();
import allRoutes from './routes/mainRoutes'

// import middleware 
import {corsOptions} from './middleware/corsMiddleware';
import sessionMiddleware from './middleware/sessionMiddleware';
import connectToDb from './config/db';

// Use middleware
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(sessionMiddleware)

//connect to db
connectToDb()

app.use('/api', allRoutes)

app.use('/', (req: Request, res: Response , next: NextFunction)=>{
    res.json({data:'fuck off!!'})
})

const PORT = process.env.PORT || 2300;

app.listen(PORT, () => console.log(`Payment generator app listening on port ${PORT}!`));
