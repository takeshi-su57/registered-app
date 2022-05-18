import * as express from 'express';
import errorMiddleware from './middlewares/error';
import usersRouter from './routes/usersRouter';


const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/users', usersRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`👉 Online server on port ${PORT}!`);
});
