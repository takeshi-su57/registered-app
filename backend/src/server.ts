import express from 'express';

const app = express();

const PORT = '3001';

app.get('/', (req, res) => {
  res.status(200).send('<h1>Servidor Online</h1>');
});

app.listen(PORT, () => {
  console.log(`👉 Online server on port ${PORT}!`);
});
