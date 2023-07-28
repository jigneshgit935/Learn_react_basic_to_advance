import React, { Component } from 'react';

export default class Unmount extends Component {
  // exampl1
  componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log('set interval');
    }, 1000);
  }

  // example2
  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log('REmoved');
  }

  render() {
    return <div>Child compoennt will unmount</div>;
  }
}
