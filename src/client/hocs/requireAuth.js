import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const requireAuth = (ChildComponent) => { // higherOrderComponent
  class RequireAuth extends Component {
  
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />;
        case null:
          return <div>Loading...</div>;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  };

  RequireAuth.propTypes = {
    auth: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ])
  };

  const mapStateToProps = ({ auth }) => {
    return { auth };
  };

  return connect(mapStateToProps)(RequireAuth);
};

export default requireAuth;