import React, { Component } from "react";

export default class Classic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      age: 25,
      cat: false,
    };
  }

  render() {
    return (
      <>
        <div>Count: {this.state.count}</div>
        {/* smart update with this.setState() */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </>
    );
  }
}
