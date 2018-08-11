import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ auth }) => {
  console.log('auth: ', auth);
  return (
    <div>
      <Link to="/" >React SSR</Link>
      <Link to="/users">Users</Link>
      <Link to="/admins">Admin</Link>
    </div>
  );
};

Header.propTypes = {
  auth: PropTypes.bool
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);