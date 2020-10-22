import React from "react";
import MeanEarnings from "./MeanEarnings.js";
import RandomForest from "./RandomForest.js";

import * as d3 from "d3";

import data from "../Resources/lasso_results_sorted_earnings_df.csv";
import elasticData from "../Resources/elasticnet_results_sorted_earnings_df.csv";

import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";

const Plot = createPlotlyComponent(Plotly);

let xValues = [];
let yValues = [];

let elasticX = [];
let elasticY = [];

let incomeRegressionCsv = () => {
  d3.csv(data, function (data) {
    xValues.push(data.VARIABLE_NAME);
    yValues.push(+data.coefficient);
  });
  return [xValues, yValues];
};

let elasticnetCsv = () => {
  d3.csv(elasticData, function (data) {
    elasticX.push(data.VARIABLE_NAME);
    elasticY.push(+data.coefficient);
  });
  return [elasticX, elasticY];
};

incomeRegressionCsv();
elasticnetCsv();

export default class Major extends React.Component {
  state = {
    data: [
      {
        x: xValues,
        y: yValues,
        type: "bar",
        mode: "lines+markers",
        marker: { color: "#a51c30" },
      },
    ],
    layout: {
      width: 720,
      height: 400,
      title: "Lasso Regression Model",
    },
    elasticData: [
      {
        x: elasticX,
        y: elasticY,
        type: "bar",
        mode: "lines+markers",
        marker: { color: "#a51c30" },
      },
    ],
    elasticLayout: {
      width: 720,
      height: 400,
      title: "Elastic Net Regression Model",
    },
  };

  incomeRegressionCsv = () => {
    d3.csv(data, function (data) {
      xValues.push(data.VARIABLE_NAME);
      yValues.push(+data.coefficient);
    });

    console.log(xValues, yValues);
    this.setState({ xValues, yValues });
  };

  elasticnetCsv = () => {
    d3.csv(data, function (data) {
      elasticX.push(data.VARIABLE_NAME);
      elasticY.push(+data.coefficient);
    });
    this.setState({ elasticX, elasticY });
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
            <Plot data={this.state.data} layout={this.state.layout} />
            <Plot data={this.state.elasticData} layout={this.state.layout} />
            <br></br>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Topic</th>
                  <th scope="col">Model</th>
                  <th scope="col">Unoptimized Model Score</th>
                  <th scope="col">RFE Score</th>
                  <th scope="col">Optimum Model Score</th>
                  <th scope="col">Features Remaining</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Earnings</th>
                  <td>Random Forest Regression</td>
                  <td>0.828</td>
                  <td>@n/a</td>
                  <td>0.8077</td>
                  <td>10</td>
                </tr>
                <tr>
                  <th scope="row">Earnings</th>
                  <td>Lasso Regression</td>
                  <td>0.77</td>
                  <td>n/a</td>
                  <td>0.834</td>
                  <td>30</td>
                </tr>
                <tr>
                  <th scope="row">Earnings</th>
                  <td>Elastic Net Regression</td>
                  <td>0.691</td>
                  <td>0.788</td>
                  <td>0.837</td>
                  <td>30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
