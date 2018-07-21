import express from 'express';
import renderer from './helpers/renderer';

const app = express();
const PORT = 5010;

// make public available to the browser
app.use(express.static('public'));

// main entry route - handles all routes
app.get('*', (req, res) => {
  res.send(renderer(req));
});

app.listen(PORT, () => {
  console.log('Listening on PORT: ', PORT)
});
