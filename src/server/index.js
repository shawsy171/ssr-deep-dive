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
const PORT = 3000;

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
  const store = createReduxStore(req);

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
  }).map((promise) => {
    if (promise) {
      /**
       * We wrap the loadData promise in a new promise 
       * so the Promise.all will always resolve even if the main loadData promise is rejected
       * this way all the data can be loaded (that does not have a failure) 
       * even if there is a failure of some kind in one of the loadData promises
       * this allows us to render the App and provide error warnings to the use 
       */
      return new Promise((resolve, reject) => {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  /**
   * once all the promises have been resolved the data will be sent to the renderer
   */
  Promise.all(promises)
    .then(() => {
      const context = {};
      const content = renderer(req, store, context);

      if (context.url) {
        return res.redirect(301, context.url);
      }
      /** 
       * after renderer() any changes to the context object can be read 
       * this means we can tell which page will be rendered 
       * in this case we know the page that will be rendered is the "notFound Page"
       * because it has added the notFound property to context object
       */
      if (context.notFound) {
        res.status(404);
      }

      res.send(content);
    });

});

app.listen(PORT, () => {
  console.log('Listening on PORT: ', PORT);
});
