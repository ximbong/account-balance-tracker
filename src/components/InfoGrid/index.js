import React, { PureComponent } from "react";

import InfoRow from "../InfoRow";

class InfoGrid extends PureComponent {
  showGraph = event => {
    const graphType = event.target.id;
    this.props.showGraph(graphType);
  };

  render() {
    const { data, name } = this.props;
    const InfoList = data.map((e, i) => (
      <InfoRow
        description={e.description}
        amount={e.amount}
        date={e.date}
        time={e.time}
        key={i}
      />
    ));

    return (
      <div className="info-box">
        <div className="income-type" onClick={this.showGraph} id={name}>
          {name}
        </div>
        <div className="item-list">{InfoList}</div>
      </div>
    );
  }
}

export default InfoGrid;
