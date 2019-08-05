import express from 'express';
const app = express();

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
