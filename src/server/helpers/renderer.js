import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

// serialize is used to turn the data into JSON/Javascript (and sanitize the data too)
import serialize from 'serialize-javascript';

// router
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import AppRoutes from '../../shared/routes/AppRoutes';

import { Helmet } from 'react-helmet';

/**
 * Server side render for react app
 * @param {object} req // request object from express
 * @param {object} store // redux store
 */
const renderer = (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>

      {/* the context object is passed to any component that is rendered by the StaticRouter */}
      <StaticRouter location={req.path} context={context}>
        <div>{ renderRoutes(AppRoutes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
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
