import * as express from 'express';
import usersRouter from './routes/usersRouter';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`👉 Online server on port ${PORT}!`);
});
