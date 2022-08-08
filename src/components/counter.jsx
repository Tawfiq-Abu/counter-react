import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    languages : ['javascript','python','c#','dart'],
  };
  styles = {
    fontSize: 16,
    fontWeight: "bold",
  };
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span> 
        <button className='btn btn-secondart btn-lg'>counter</button>
        <ul>
            { this.state.languages.map(tag =>
                <li key={tag}>{tag}</li>
            )}
        </ul>
      </React.Fragment>
    );
  }
    getBadgeClasses() {
        let classes = "m-2 badge badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

  formatCount () {
    const {count} = this.state;
    if (count === 0){
        return <h1 style={this.styles}>Zero</h1>
    } else{
        return count
    }
  }
}

export default Counter;
