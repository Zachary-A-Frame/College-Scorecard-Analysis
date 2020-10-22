import React from "react";
import MeanEarnings from "./MeanEarnings.js";
import RandomForest from "./RandomForest.js";

import * as d3 from "d3";
import data from "../Resources/lasso_results_sorted_earnings_df.csv";

import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";

const Plot = createPlotlyComponent(Plotly);

let xValues = [];
let yValues = [];

let incomeRegressionCsv = () => {
     d3.csv(data, function (data) {
          xValues.push(data.VARIABLE_NAME)
          yValues.push(+data.coefficient)
     })
     return [xValues, yValues]
};

incomeRegressionCsv()

console.log(xValues, yValues)


export default class Income extends React.Component {
     state = {
          data: [{ x: xValues, y: yValues, type: "bar", mode: "lines+markers", marker: { color: "#a51c30" } }],
          layout: {
                width: 720,
                height: 400,
                title: "Lasso",
              }
  }

  incomeRegressionCsv = () => {


     d3.csv(data, function (data) {
          xValues.push(data.VARIABLE_NAME)
          yValues.push(+data.coefficient)
     })

     console.log(xValues, yValues)
     this.setState({xValues, yValues});
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="option">
            <h2 className="title">Starting Income Results</h2>
            <hr></hr>
            <h3 style={{ textAlign: "center" }}>
              Mean Earning After 6 Years From Enrollment
            </h3>

            <h3 style={{ textAlign: "center" }}>
              Simple Linear Regression Model between earnings and tuition to
              determine if a relation exists.
            </h3>
            <MeanEarnings className="visualizations"></MeanEarnings>
            <hr></hr>
            <h3 style={{ textAlign: "center" }}>Random Forest Regressor</h3>
            <RandomForest
              style={{ width: "100%", height: "100%" }}
            ></RandomForest>
            <Plot
              data={[
                {
                  x: [
                    "WDRAW_ORIG_YR2_RT",
                    "TUITFTE",
                    "PCIP51",
                    "MARRIED",
                    "PCIP50",
                    "SAT_AVG_ALL",
                    "UGDS",
                    "DEPENDENT",
                    "SATMT25",
                    "PCIP14",
                    "FIRST_GEN",
                  ],
                  y: [
                    0.33522776619399347,
                    0.11220941858023022,
                    0.09141163020287281,
                    0.07713876539017006,
                    0.06334198959290263,
                    0.06304269679490501,
                    0.05644540020803969,
                    0.05446367613749309,
                    0.05388399800392126,
                    0.05309461760723638,
                    0.03974004128823523,
                  ],
                  type: "bar",
                  mode: "lines+markers",
                  marker: { color: "#a51c30" },
                },
              ]}
              layout={{
                width: 720,
                height: 400,
                title: "Random Forest Summary",
              }}
            />
                        <Plot
                             data={this.state.data}
                             layout={this.state.layout}
          //     data={[
          //       {
          //         x: this.state.xValues,
          //         y: this.state.yValues,
          //         type: "bar",
          //         mode: "lines+markers",
          //         marker: { color: "#a51c30" },
          //       },
          //     ]}
          //     layout={{
          //       width: 720,
          //       height: 400,
          //       title: "Lasso",
          //     }}
            />
          </div>
        </div>
      </div>
    );
  }
}
