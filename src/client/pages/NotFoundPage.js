import React from 'react';
import PropTypes from 'prop-types';

const NotFoundPage = ({ staticContext = {} }) => {

  staticContext.notFound = true;

  return (
    <div>
      <h1>Page not Found</h1>
    </div>
  );
};

NotFoundPage.propTypes = {
  staticContext: PropTypes.object
};

export default {
  component: NotFoundPage
};
