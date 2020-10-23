import React from "react";
import RandomForestMajor from "./RandomForestMajor.js";

import * as d3 from "d3";

import data from "../Resources/lasso_results_sorted_majors_df.csv";
import elasticData from "../Resources/elasticnet_results_sorted_majors_df.csv";
import forestData from "../Resources/random_forest_major_earnings_summary_table.csv";

import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";

const Plot = createPlotlyComponent(Plotly);

let xValues = [];
let yValues = [];

let elasticX = [];
let elasticY = [];

let forestX = [];
let forestY = [];

let lassoRegressionCsv = () => {
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

let forestCsv = () => {
  d3.csv(forestData, function (data) {
    forestX.push(data.VARIABLE_NAME);
    forestY.push(+data.importance);
  });
  return [forestX, forestY];
};

lassoRegressionCsv();
elasticnetCsv();
forestCsv();

export default class MajorResults extends React.Component {
  state = {
       data: [{
            x: xValues,
            y: yValues,
            type: "bar",
            mode: "lines+markers",
            marker: {
                 color: "#a51c30"
            },
       }, ],
       layout: {
            width: 720,
            height: 400,
            title: "Lasso Regression Model",
       },
       elasticData: [{
            x: elasticX,
            y: elasticY,
            type: "bar",
            mode: "lines+markers",
            marker: {
                 color: "#a51c30"
            },
       }, ],
       elasticLayout: {
            width: 720,
            height: 400,
            title: "Elastic Net Regression Model",
       },
       randomForestData: [{
            x: forestX,
            y: forestY,
            type: "bar",
            mode: "lines+markers",
            marker: {
                 color: "#a51c30"
            }
       }],
       randomForestLayout: {
            width: 720,
            height: 400,
            title: "Random Forest Regressor"
       }
  };

  lassoRegressionCsv = () => {
    d3.csv(data, function (data) {
      xValues.push(data.VARIABLE_NAME);
      yValues.push(+data.coefficient);
    });
    this.setState({ xValues, yValues });
  };

  elasticnetCsv = () => {
    d3.csv(data, function (data) {
      elasticX.push(data.VARIABLE_NAME);
      elasticY.push(+data.coefficient);
    });
    this.setState({ elasticX, elasticY });
     };

 forestCsv = () => {
  d3.csv(forestData, function (data) {
    forestX.push(data.VARIABLE_NAME);
    forestY.push(+data.importance);
  });
  this.setState({ forestX, forestY })
};

  render() {
    return (
      <div>
        <div className="container">
          <div className="option">
            <h2 className="title">Major Selection Results</h2>
            <h3 className="option__text" style={{ textAlign: "center" }}>
              <a href="http://localhost:3000/College-Scorecard-Analysis/static/media/random_forest_summary_college_major_tree.85810e62.png">
                Random Forest Forbes Tree
              </a>
            </h3>
            <RandomForestMajor
              style={{ width: "100%", height: "100%" }}
            ></RandomForestMajor>
            <Plot
              data={this.state.randomForestData}
              layout={this.state.randomForestLayout}
            />
            <Plot data={this.state.data} layout={this.state.layout} />
            <Plot
              data={this.state.elasticData}
              layout={this.state.elasticLayout}
            />
            <br></br>
            <table className="table">
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
                  <th scope="row">College Major</th>
                  <td>Random Forest Regression</td>
                  <td>0.494</td>
                  <td>n/a</td>
                  <td>0.505</td>
                  <td>10</td>
                </tr>
                <tr>
                  <th scope="row">College Major</th>
                  <td>Lasso Regression</td>
                  <td>0.505</td>
                  <td>0.45</td>
                  <td>n/a</td>
                  <td>30</td>
                </tr>
                <tr>
                  <th scope="row">College Major</th>
                  <td>Elastic Net Regression</td>
                  <td>0.21</td>
                  <td>0.364</td>
                  <td>0.434</td>
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
