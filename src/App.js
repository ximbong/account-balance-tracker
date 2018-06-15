import React, { Component } from "react";

import Title from "./components/Title";
import Header from "./components/Header";
import Main from "./components/Main";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incomeData: [],
      expenseData: [],
      incomeTotal: 0,
      expenseTotal: 0
    };
  }

  addData = (data, type) => {
    this.setState({
      [`${type}Data`]: [...this.state[`${type}Data`], data],
      [`${type}Total`]: this.state[`${type}Total`] + parseInt(data.amount, 10)
    });
  };

  render() {
    return (
      <div className="wrapper">
        <Title />
        <div className="container">
          <Header addData={this.addData} />
          <Main data={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
