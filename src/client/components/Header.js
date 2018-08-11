import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';

const Header = ({ auth }) => {
  console.log('auth: ', auth);

  const authButton = auth ? ( 
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React SSR
        </Link>
        <div>
          <ul className="right">
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/admins">Admin</Link>
            </li>
            <li>
              {authButton}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
};

Header.propTypes = {
  auth: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      googleId: PropTypes.string.isRequired,
      __v: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
    }),
  ])
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);