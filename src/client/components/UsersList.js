import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from './../../shared/store/users/actions';

class UsersList extends Component {
  componentDidMount () {
    this.props.fetchUsers();
  }
  render() {
    const { users } = this.props;
    return (
      <div>
        Here is big list of users
        <ul>
          { users.map((user) => <li key={user.id}>{user.name}</li> )}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { users: state.users }
}
export default connect(mapStateToProps, { fetchUsers })(UsersList);