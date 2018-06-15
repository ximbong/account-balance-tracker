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
    const { description, amount, type } = this.state;
    const displayData = {
      description: description,
      amount: amount
    };
    this.props.addData(displayData, type);
  };
  render() {
    const { description, amount, type } = this.state;
    return (
      <div className="header">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={this.handleDescription}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={this.handleAmount}
        />
        <div className="option">
          <select value={type} onChange={this.handleType}>
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
