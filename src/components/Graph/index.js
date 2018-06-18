import React, { Component } from "react";
import Plot from "react-plotly.js";
import "font-awesome/css/font-awesome.min.css";

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphHeight: 0
    };
  }

  componentDidMount() {
    this.setState({ graphHeight: this.divRef.clientHeight - 50 });
  }

  render() {
    const { showGraph, graphData, graphType } = this.props;
    const labels = graphData.map(e => e.description);
    const values = graphData.map(e => e.amount);

    return (
      <div
        className="main no-border-shadow"
        ref={element => (this.divRef = element)}
      >
        <div className="close">
          <i
            className="fa fa-times"
            onClick={() => {
              showGraph(null);
            }}
          />
        </div>
        <Plot
          data={[
            {
              values: values,
              labels: labels,
              type: "pie",
              name: "Dollars ($)"
            }
          ]}
          layout={{
            width: 800,
            height: this.state.graphHeight,
            title: `An ${graphType} pie chart`
          }}
        />
      </div>
    );
  }
}

export default Graph;
