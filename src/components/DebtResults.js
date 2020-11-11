import React from "react"
import RandomForest from "./RandomForest.js"

import * as d3 from "d3"

import data from "../Resources/lasso_results_sorted_debt_df.csv"
import elasticData from "../Resources/elasticnet_results_debt_df.csv"
import forestData from "../Resources/random_forest_debt_summary_table.csv"

import Plotly from "plotly.js"
import createPlotlyComponent from "react-plotly.js/factory"

import DebtLegend from "./DebtLegend";
import Zoom from "./Zoom"


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
            <h3 className="option__text" style={{ textAlign: "center" }}>
              <a
                href="https://zachary-a-frame.github.io/College-Scorecard-Analysis/static/media/random_forest_summary_debt_tree.8ddc8df4.png"
                target="_blank"
                rel="noreferrer noopener"
              >
                Random Forest Debt Tree <Zoom />
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
            <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
              If you're concerned about debt, don't:{" "}
            </h3>
            <ul>
              <li>Major in Architecture</li>
              <li>Go to a school with large tuition</li>
              <li>Take 8 years to graduate</li>
              <li>Withdraw within 8 years</li>
            </ul>
            <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
              Do:{" "}
            </h3>
            <ul>
              <li>Withdraw within 2 years (If you're unsure of completion)</li>
              <li>Attend a University with high instructional expenditures per student.</li>
              <li>Major in Multi/Interdisciplinary Studies.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
