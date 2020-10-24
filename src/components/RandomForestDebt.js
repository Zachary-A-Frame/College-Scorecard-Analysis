import React from "react";

export default class RandomForestDebt extends React.Component {
  render() {
    return (
      <div>


        <img
                  src={require("../assets/random_forest_summary_debt_tree.png")}
                  alt="random_forest_summary"
                  height="100%"
                  width="100%"
                  className="image img-fluid"
        ></img>
        </div>

    );
  }
}
