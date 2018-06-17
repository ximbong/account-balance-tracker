import React, { Component } from "react";

import Title from "./components/Title";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Graph from "./components/Graph";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incomeData: [],
      expenseData: [],
      incomeTotal: 0,
      expenseTotal: 0,
      graphType: null
    };
  }

  addData = (data, type) => {
    this.setState({
      [`${type}Data`]: [...this.state[`${type}Data`], data],
      [`${type}Total`]: this.state[`${type}Total`] + parseInt(data.amount, 10)
    });
  };

  showGraph = graphType => {
    this.setState({
      graphType: graphType
    });
  };

  render() {
    const graphType = this.state.graphType;

    return (
      <div className="wrapper">
        <Title />
        <div className="container">
          <Header addData={this.addData} />
          {!graphType ? (
            <Stats data={this.state} showGraph={this.showGraph} />
          ) : (
            <Graph
              graphType={graphType}
              showGraph={this.showGraph}
              graphData={this.state[`${graphType}Data`]}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
