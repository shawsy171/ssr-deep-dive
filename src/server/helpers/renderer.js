import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import AppRoutes from './../../shared/AppRoutes';

const renderer = (req) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <AppRoutes />
    </StaticRouter>
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
