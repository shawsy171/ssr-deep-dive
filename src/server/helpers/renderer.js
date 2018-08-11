import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
// router
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import AppRoutes from '../../shared/routes/AppRoutes';

/**
 * Server side render for react app
 * @param {object} req // request object from express
 * @param {object} store // redux store
 */
const renderer = (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{ renderRoutes(AppRoutes)}</div>
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
      <head>
        <title>SSR</title>
        
        <!-- Import Google Icon Font -->
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!-- Import materialize.css -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet">
      </head>
      <body>
        <div id="root">${content}</div>

        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>

        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};

export default renderer;
