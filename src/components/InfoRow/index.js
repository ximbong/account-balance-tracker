import React, { PureComponent } from "react";

class InfoRow extends PureComponent {
  render() {
    const { description, amount, time, date } = this.props;
    return (
      <div className="item">
        <div className="item-name"> {description}</div>
        <div className="amount">
          <span className="number">{amount}</span>
          <span className="currency">$</span>
        </div>
        <div className="time">
          {time} {date}
        </div>
      </div>
    );
  }
}

export default InfoRow;
