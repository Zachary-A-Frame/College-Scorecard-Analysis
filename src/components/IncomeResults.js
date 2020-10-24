import React from "react"
import MeanEarnings from "./MeanEarnings.js"
import RandomForest from "./RandomForest.js"

import * as d3 from "d3"

import data from "../Resources/lasso_results_sorted_earnings_df.csv"
import elasticData from "../Resources/elasticnet_results_sorted_earnings_df.csv"

import Plotly from "plotly.js"
import createPlotlyComponent from "react-plotly.js/factory"

import IncomeLegend from './IncomeLegend'

const Plot = createPlotlyComponent(Plotly)

let xValues = []
let yValues = []

let elasticX = []
let elasticY = []

let incomeRegressionCsv = () => {
     d3.csv(data, function (data) {
          xValues.push(data.VARIABLE_NAME)
          yValues.push(+data.coefficient)
     })
     return [xValues, yValues]
};

let elasticnetCsv = () => {
  d3.csv(elasticData, function (data) {
    elasticX.push(data.VARIABLE_NAME);
    elasticY.push(+data.coefficient);
  });
  return [elasticX, elasticY];
};

incomeRegressionCsv()
elasticnetCsv()


export default class Income extends React.Component {
     state = {
          data: [{ x: xValues, y: yValues, type: "bar", mode: "lines+markers", marker: { color: "#a51c30" } }],
          layout: {
               width: 720,
               height: 400,
               title: "Lasso Regression Model",
          },
          elasticData: [{ x: elasticX, y: elasticY, type: "bar", mode: "lines+markers", marker: { color: "#a51c30" } }],
          elasticLayout: {
               width: 720,
               height: 400,
               title: "Elastic Net Regression Model"
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

     elasticnetCsv = () => {
          d3.csv(data, function (data) {
               elasticX.push(data.VARIABLE_NAME)
               elasticY.push(+data.coefficient)
          })
     this.setState({elasticX, elasticY})
     }

  render() {
    return (
      <div>
        <IncomeLegend></IncomeLegend>
        <div className="container">
          <div className="option">
            <h2 className="title">Starting Income Results</h2>
            <hr></hr>
            <h2>
              Factors that determine the highest income 6 years after enrollment
              in college:{" "}
            </h2>
            <h3 style={{ marginLeft: "25%", textDecoration: "underline" }}>
              Do:{" "}
            </h3>
            <ul>
              <li>
                Major in Engineering, Health Professions, Transporation And
                Materials Moving, Mechanic
              </li>
              <li>Go to College that spends heavily on faculty salaries</li>
              <li>
                Go to college that has high instructional expenditures per full
                time students
              </li>
              <li>Come from a family with a family income over $110,000</li>
            </ul>
            <h3 style={{ marginLeft: "25%", textDecoration: "underline" }}>
              Don't:{" "}
            </h3>
            <ul>
              <li>Withdrawal from college after 2 years</li>
              <li>
                Don't major in Visual & Performing Arts, Natural Resources and
                Conservation
              </li>
              <li>Don't come from a family that makes $30,000/year</li>
            </ul>
            <h3 style={{ textAlign: "center" }}>
              Simple Linear Regression Model between earnings and tuition to
              determine if a relation exists:
            </h3>
            <MeanEarnings className="visualizations"></MeanEarnings>
            <hr></hr>
            <h3 className="option__text" style={{ textAlign: "center" }}>
              <a href="https://zachary-a-frame.github.io/College-Scorecard-Analysis/static/media/random_forest_summary_earnings_tree.0001efa3.png">
                Random Forest Earnings Tree{" "}
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
              style={{ width: "100%", height: "100%" }}
            ></RandomForest>
            <div className="Plot">
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
              <Plot
                data={this.state.elasticData}
                layout={this.state.elasticLayout}
              />
            </div>
            <br></br>
            {/* <table class="table">
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
                  <td>n/a</td>
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
            </table> */}
            <div className="row">
              <Plot
                className="col"
                data={[
                  {
                    x: ["Random Forest", "Lasso", "Elastic Net"],
                    y: [0.828, 0.77, 0.691],
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
                    x: ["Random Forest", "Lasso", "Elastic Net"],
                    y: [0.8077, 0.734, 0.837],
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
