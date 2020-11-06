import React from "react";
import RandomForest from "./RandomForest.js";

import * as d3 from "d3";

import data from "../Resources/lasso_results_sorted_majors_df.csv";
import elasticData from "../Resources/elasticnet_results_sorted_majors_df.csv";
import forestData from "../Resources/random_forest_major_earnings_summary_table.csv";

import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";

import MajorLegend from "./MajorLegend";
import Zoom from "./Zoom"

const Plot = createPlotlyComponent(Plotly);

let xValues = [];
let yValues = [];

let elasticX = [];
let elasticY = [];

let forestX = [];
let forestY = [];

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

  return [xValues, yValues, elasticX, elasticY, forestX, forestY]
}

csvReader()

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

  csvReader = () => {
    d3.csv(data, function (data) {
      xValues.push(data.VARIABLE_NAME);
      yValues.push(+data.coefficient);
    });
    this.setState({ xValues, yValues });
     d3.csv(data, function (data) {
       elasticX.push(data.VARIABLE_NAME);
       elasticY.push(+data.coefficient);
     });
    this.setState({ elasticX, elasticY });
    d3.csv(forestData, function (data) {
      forestX.push(data.VARIABLE_NAME);
      forestY.push(+data.importance);
    });
    this.setState({ forestX, forestY });
  }

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
                <Zoom />
              </a>
            </h3>
            <RandomForest
              imgsrc={require("../assets/random_forest_summary_college_major_tree.png")}
            ></RandomForest>
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
