import React from "react";

export default class MeanEarnings extends React.Component {
  render() {
    return (
      <div>
        <img
          src={require("../assets/earnings_tuition.png")}
          alt="Earnings Tuition"
          height="100%"
          width="100%"
          className="img-fluid"
        ></img>
      </div>
    );
  }
}
