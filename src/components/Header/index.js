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
  getDate = () => {
    const date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1; //January is 0!
    const yyyy = date.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    return dd + "/" + mm + "/" + yyyy;
  };
  getTime = () => {
    const date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if (hr < 10) {
      hr = "0" + hr;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }

    return hr + ":" + min + ":" + sec;
  };
  handleClick = () => {
    const { description, amount, type } = this.state;
    const displayData = {
      description: description,
      amount: amount,
      date: this.getDate(),
      time: this.getTime()
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
