import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../../shared/store/users/actions';

class UsersListPage extends Component {
  componentDidMount () {
    this.props.fetchUsers();
  }
  render() {
    const { users } = this.props;
    return (
      <div>
        <h1>Here is big list of users</h1>
        <ul>
          { users.map((user) => <li key={user.id}>{user.name}</li> )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};
/**
 * this will be called in the server/index.js file 
 * @param {object} store 
 */
export const loadData = (store) => {
  // this is using the server side store
  return store.dispatch(fetchUsers());
};

export default connect(mapStateToProps, { fetchUsers })(UsersListPage);