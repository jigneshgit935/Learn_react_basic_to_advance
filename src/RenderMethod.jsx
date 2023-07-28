import React, { Component } from 'react';

export default class RenderMethod extends Component {
  render() {
    // Example1
    // console.log('Render Method!!', this.props);
    return (
      <>
        <h2>Render Method {this.props.name}</h2>
      </>
    );
  }
}
