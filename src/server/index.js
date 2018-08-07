import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';

// config
import config from './../shared/config';

// router
import { matchRoutes } from 'react-router-config';
import AppRoutes from '../shared/routes/AppRoutes';

// helpers
import renderer from './helpers/renderer';
import createReduxStore from './helpers/createStore';

const app = express();
const PORT = 5010;

// use proxy for API calls
app.use('/api', proxy(config.API_URL, {
  // this is just for this course's api
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:' + PORT;
    return opts;
  }
}));

// make public available to the browser
app.use(express.static('public'));

// main entry route - handles all routes
app.get('*', (req, res) => {
  const store = createReduxStore(req)

  /**
   * e.g. if the path is /users 
   * matchRoutes(AppRoutes, req.path) will return an this 
    [{
      loadData,
      path: '/users',
      component: UsersList,
    }]
   * then the function will map through the array and check for loadData function
   * if this is available the loadData function will be called
   */
  const promises = matchRoutes(AppRoutes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  })

  

  /**
   * once all the promises have been resolved the data will be sent to the renderer
   */
  Promise.all(promises)
    .then(() => {
      res.send(renderer(req, store));
    })

});

app.listen(PORT, () => {
  console.log('Listening on PORT: ', PORT)
});
