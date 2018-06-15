import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      amount: "",
      type: "income"
    };
  }
  handleAmount = event => {
    this.setState({
      amount: event.target.value
    });
    event.target.value = "";
  };
  handleDescription = event => {
    this.setState({
      description: event.target.value
    });
    event.target.value = "";
  };
  handleType = event => {
    this.setState({
      type: event.target.value
    });
  };
  handleClick = () => {
    console.log(this.state);
    this.props.addData(this.state);
  };
  render() {
    return (
      <div className="header">
        <input
          type="text"
          placeholder="Description"
          value={this.state.description}
          onChange={this.handleDescription}
        />
        <input
          type="number"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.handleAmount}
        />
        <div className="option">
          <select value={this.state.type} onChange={this.handleType}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button onClick={this.handleClick}>Add</button>
        </div>
      </div>
    );
  }
}

export default Header;
