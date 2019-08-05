import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
    console.log("Delete funciton called", counterID);
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary btn-sm">
          reset
        </button>
        <br />
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            /* value={counter.value}
            id={counter.id} */
            onDelete={this.handleDelete}
            counter={counter}
            onIncrement={this.handleIncrement}
          >
            <h4>Counter# {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
