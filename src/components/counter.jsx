/** @format */

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 45,
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>g</span>
        <button type='button' className='btn btn-primary btn-sm'>
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {}
}

export default Counter;
