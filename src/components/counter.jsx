import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    languages : [],
  };
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

//   constructor (){
//     super();
//     //bind returns a new instance of the function so we have to set it to that instance to use it
//     this.handleIncrement=this.handleIncrement.bind(this);
//   }


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

  handleIncrement= ()=>{
    this.setState({ count: this.state.count +1})
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-lg">Increment</button>
      </div>
    );
  }
   
  getBadgeClasses(){
    let classes = 'mx-1 mb-2 badge m2 badge-';
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount () {
    const count = this.state.count;
    if (count === 0){
        return <h1 style={this.styles}>Zero</h1>
    } else{
        return count
    }
  }
}

export default Counter;
