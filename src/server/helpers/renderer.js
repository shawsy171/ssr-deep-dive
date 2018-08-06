import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

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
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}

export default renderer;
