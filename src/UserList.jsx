import React, { Component } from 'react';

export class UserList extends Component {
  render() {
    console.log(this.props);
    const { name, email } = this.props;
    return (
      <>
        <h1>User List</h1>
        {/* <h3>{this.props.name}</h3>
        <h2>{this.props.email}</h2> */}
        <h2>{name}</h2>
        <h2>{email}</h2>
      </>
    );
  }
}

export default UserList;
