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
      totalIncome: 0,
      totalExpense: 0
    };
  }
  addData = (data, type) => {
    if (type === "income") {
      this.setState({
        incomeData: [...this.state.incomeData, data],
        totalIncome: this.state.totalIncome + parseInt(data.amount)
      });
    } else {
      this.setState({
        expenseData: [...this.state.expenseData, data],
        totalExpense: this.state.totalExpense + parseInt(data.amount)
      });
    }
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
