import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { fetchUsers } from '../../shared/store/users/actions';

class UsersListPage extends Component {
  componentDidMount () {
    this.props.fetchUsers();
  }

  head () {
    return (
      <Helmet>
        <title>{ `${this.props.users.length} Users APP` }</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        {this.head()}
        <h1>Here is big list of users</h1>
        <ul>
          { users.map((user) => <li key={user.id}>{user.name}</li> )}
        </ul>
      </div>
    );
  }
}

UsersListPage.propTypes = {
  fetchUsers: PropTypes.func,
  users: PropTypes.array,
};

const mapStateToProps = (state) => {
  return { users: state.users };
};
/**
 * this will be called in the server/index.js file 
 * @param {object} store 
 */
const loadData = (store) => {
  // this is using the server side store
  return store.dispatch(fetchUsers());
};

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
};