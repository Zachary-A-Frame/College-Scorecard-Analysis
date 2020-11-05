import React from "react"
import RandomForest from "./RandomForest.js"

import * as d3 from "d3"

import data from "../Resources/lasso_results_sorted_debt_df.csv"
import elasticData from "../Resources/elasticnet_results_debt_df.csv"
import forestData from "../Resources/random_forest_debt_summary_table.csv"

import Plotly from "plotly.js"
import createPlotlyComponent from "react-plotly.js/factory"

import DebtLegend from "./DebtLegend";


const Plot = createPlotlyComponent(Plotly)

let xValues = []
let yValues = []

let elasticX = []
let elasticY = []

let forestX = []
let forestY = []

let csvReader = () => {
  d3.csv(data, function (data) {
    xValues.push(data.VARIABLE_NAME);
    yValues.push(+data.coefficient);
  });
  d3.csv(elasticData, function (data) {
    elasticX.push(data.VARIABLE_NAME);
    elasticY.push(+data.coefficient);
  });
  d3.csv(forestData, function (data) {
    forestX.push(data.VARIABLE_NAME);
    forestY.push(+data.importance);
  });
  return [xValues, yValues, elasticX, elasticY, forestX, forestY];
};

csvReader();
export default class DebtResults extends React.Component {


  state = {
    data: [
      {
        x: xValues,
        y: yValues,
        type: "bar",
        mode: "lines+markers",
        marker: {
          color: "#a51c30",
        },
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
        marker: {
          color: "#a51c30",
        },
      },
    ],
    elasticLayout: {
      width: 720,
      height: 400,
      title: "Elastic Net Regression Model",
    },
    randomForestData: [
      {
        x: forestX,
        y: forestY,
        type: "bar",
        mode: "lines+markers",
        marker: {
          color: "#a51c30",
        },
      },
    ],
    randomForestLayout: {
      width: 720,
      height: 400,
      title: "Random Forest Regressor",
    },
  }

  lassoRegressionCsv = () => {
    d3.csv(data, function (data) {
      xValues.push(data.VARIABLE_NAME)
      yValues.push(+data.coefficient)
    })
    this.setState({ xValues, yValues })
  }

  elasticnetCsv = () => {
    d3.csv(data, function (data) {
      elasticX.push(data.VARIABLE_NAME)
      elasticY.push(+data.coefficient)
    })
    this.setState({ elasticX, elasticY })
  }

  forestCsv = () => {
    d3.csv(forestData, function (data) {
      forestX.push(data.VARIABLE_NAME)
      forestY.push(+data.importance)
    })
    this.setState({ forestX, forestY })
  }

  render() {
    return (
      <div>
        <DebtLegend></DebtLegend>
        <div className="container">
          <div className="option">
            <h2 className="title">College Debt Results</h2>
            <hr></hr>
            <h2>
              Factors that determine the highest amount of Debt after enrolling
              in college:
            </h2>
            <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
              Do:{" "}
            </h3>
            <ul>
              <li>Major in Architecture</li>
              <li>Go to a school with large tuition</li>
              <li>Take 8 years to graduate</li>
              <li>Withdraw within 8 years</li>
            </ul>
            <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
              Don't:{" "}
            </h3>
            <ul>
              <li>Withdraw within 2 years</li>
              <li>Major in Ethnic, Cultural, Gender, And Group Studies.</li>
              <li>Major in Multi/Interdisciplinary Studies.</li>
            </ul>
            <h3 className="option__text" style={{ textAlign: "center" }}>
              <a
                href="https://zachary-a-frame.github.io/College-Scorecard-Analysis/static/media/random_forest_summary_debt_tree.8ddc8df4.png"
                target="_blank"
                rel="noreferrer noopener"
              >
                Random Forest Debt Tree{" "}
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
            <RandomForest
              imgsrc={require("../assets/random_forest_summary_debt_tree.png")}
            ></RandomForest>
            <div className="Plot">
              <Plot
                className="Plot"
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
                  <th scope="row">Debt</th>
                  <td>Random Forest Regression</td>
                  <td>0.570</td>
                  <td>n/a</td>
                  <td>0.544</td>
                  <td>10</td>
                </tr>
                <tr>
                  <th scope="row">Debt</th>
                  <td>Lasso Regression</td>
                  <td>0.18</td>
                  <td>0.623</td>
                  <td>n/a</td>
                  <td>30</td>
                </tr>
                <tr>
                  <th scope="row">Debt</th>
                  <td>Elastic Net Regression</td>
                  <td>0.398</td>
                  <td>0.187</td>
                  <td>0.623</td>
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
                    y: [0.57, 0.18, 0.398],
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
                    y: [0.544, 0.623],
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
