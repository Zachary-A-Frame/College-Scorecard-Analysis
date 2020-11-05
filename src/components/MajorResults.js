import React from "react";
import RandomForestMajor from "./RandomForestMajor.js";

import * as d3 from "d3";

import data from "../Resources/lasso_results_sorted_majors_df.csv";
import elasticData from "../Resources/elasticnet_results_sorted_majors_df.csv";
import forestData from "../Resources/random_forest_major_earnings_summary_table.csv";

import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";

import MajorLegend from "./MajorLegend";


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
        <MajorLegend></MajorLegend>
        <div className="container">
          <div className="option">
            <h2 className="title">Major Selection Results</h2>
            <h2>
              Factors that determine the highest income based on Major
              selection:
            </h2>
            <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
              Do Major In:
            </h3>
            <ul>
              <li>Engineering</li>
              <li>Health Sciences</li>
              <li>Social Sciences</li>
              <li>Mathematics</li>
              <li>Statistics</li>
              <li>Transportation</li>
            </ul>
            <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
              Don't Major In:{" "}
            </h3>
            <ul>
              <li>Construction</li>
              <li>Public Administration</li>
              <li>Parks and Recreation</li>
              <li>Theology</li>
              <li>Eduction</li>
              <li>Law Enforcement</li>
            </ul>
            <h3 className="option__text" style={{ textAlign: "center" }}>
              <a
                href="https://zachary-a-frame.github.io/College-Scorecard-Analysis/static/media/random_forest_summary_college_major_tree.85810e62.png"
                target="_blank"
                rel="noreferrer noopener"
              >
                Random Forest College Major Tree{" "}
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-zoom-in"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                  />
                  <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </a>
            </h3>
            <RandomForestMajor
              style={{ width: "100%", height: "100%" }}
            ></RandomForestMajor>
            <div className="Plot">
              <Plot
                data={this.state.randomForestData}
                layout={this.state.randomForestLayout}
              />
              <Plot data={this.state.data} layout={this.state.layout} />
              <Plot
                data={this.state.elasticData}
                layout={this.state.elasticLayout}
              />
            </div>
            <br></br>
            {/* <table className="table">
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
            </table> */}

            <div className="row">
              <Plot
                className="col"
                data={[
                  {
                    x: ["Random Forest", "Lasso", "Elastic Net"],
                    y: [0.494, 0.505, 0.21],
                    type: "bar",
                    mode: "lines+markers",
                    marker: { color: "#a51c30" },
                  },
                ]}
                layout={{
                  width: 320,
                  height: 240,
                  title: "Unoptimized Model Score",
                }}
              />
              <Plot
                className="col"
                data={[
                  {
                    x: ["Random Forest", "Elastic Net"],
                    y: [0.505, 0.434],
                    type: "bar",
                    mode: "lines+markers",
                    marker: { color: "#a51c30" },
                  },
                ]}
                layout={{
                  width: 320,
                  height: 240,
                  title: "Optimized Model Score",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
