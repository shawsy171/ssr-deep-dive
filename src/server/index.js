import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createReduxStore from './helpers/createStore';

const app = express();
const PORT = 5010;

// make public available to the browser
app.use(express.static('public'));

// main entry route - handles all routes
app.get('*', (req, res) => {
  const store = createReduxStore()
  res.send(renderer(req, store));
});

app.listen(PORT, () => {
  console.log('Listening on PORT: ', PORT)
});
