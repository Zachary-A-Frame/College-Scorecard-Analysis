import React from "react";

export default class MeanEarnings extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="option">
            <div className="row">
              <div className="column">
                <h3 className="option__text"> </h3>
                <img
                  src={require("../assets/earnings_tuition.png")}
                  alt="Earnings Tuition"
                  height="100%"
                  width="100%"
                  className="image img-fluid"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
