import React, { Component } from "react";
import Title from "./components/Title";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  addData = data => {
    this.setState(prevState => ({
      data: [...this.state.data, data]
    }));
  };
  render() {
    console.log(this.state.data);
    return (
      <div>
        <Title />
        <div className="container">
          <Header addData={this.addData} />
          {/* <Main /> */}
        </div>
      </div>
    );
  }
}

export default App;
