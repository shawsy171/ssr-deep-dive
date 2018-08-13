import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchAdmins } from '../../shared/store/admins/actions';
import requireAuth from './../hocs/requireAuth';

class AdminsListPage extends Component {
  componentDidMount () {
    this.props.fetchAdmins();
  }
  render() {
    const { admins } = this.props;
    return (
      <div>
        <h1>Here is big list of admins</h1>
        <ul>
          { admins.map((admin) => <li key={admin.id}>{admin.name}</li> )}
        </ul>
      </div>
    );
  }
}

AdminsListPage.propTypes = {
  fetchAdmins: PropTypes.func,
  admins: PropTypes.array,
};

const mapStateToProps = (state) => {
  return { admins: state.admins };
};
/**
 * this will be called in the server/index.js file 
 * @param {object} store 
 */
const loadData = (store) => {
  // this is using the server side store
  return store.dispatch(fetchAdmins());
};

export default {
  loadData,
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsListPage)),
};