import React, { Component } from "react";

class Counter extends Component {
  /* state = {
    count: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"]
  };
 */
  /* constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  } */

  /*  handleIncrement = () => {
    this.setState({ count: this.props.counter.count + 1 });
  };
 */
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatcount()}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondry btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {
          <ul>
            {/*  {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))} */}
          </ul>
        }
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatcount() {
    const { count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
