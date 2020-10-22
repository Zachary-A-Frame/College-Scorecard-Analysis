import React from "react";

export default class RandomForestDebt extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="option">
            <div className="row">
              <div className="column">
                <h3 className="option__text">Random Forest Debt Tree</h3>

                <img
                  src={require("../assets/random_forest_summary_debt_tree.png")}
                  alt="random_forest_summary"
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
