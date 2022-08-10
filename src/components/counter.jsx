import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    languages : [],
  };
  styles = {
    fontSize: 16,
    fontWeight: "bold",
  };


  renderLanguages (){
    if (this.state.languages.length === 0){
        return <p>There are no Languages</p>;
    } else{

        return <ul>
                    { this.state.languages.map(tag =>
                        <li key={tag}>{tag}</li>
                    )}
                </ul>;
    }

  }

  render() {
    return (
      <React.Fragment>
        {this.state.languages.length === 0 && "please create tags"}
        { this.renderLanguages() }
      </React.Fragment>
    );
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
