import React from "react";
import Plot from "react-plotly.js";
import "font-awesome/css/font-awesome.min.css";

const Graph = ({ showGraph, graphData, graphType }) => {
  const labels = graphData.map(e => e.description);
  const values = graphData.map(e => e.amount);

  return (
    <div className="main no-border-shadow">
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
        layout={{ width: 800, height: 500, title: `An ${graphType} pie chart` }}
      />
    </div>
  );
};

export default Graph;
