import React from "react";

import data from "../Resources/random_forest_summary_forbes_df.csv";

import * as d3 from "d3";

import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";



const Plot = createPlotlyComponent(Plotly);

let xValues = [];
let yValues = [];

let randomForestCsv = () => {
  d3.csv(data, function (data) {
    xValues.push(data.VARIABLE_NAME);
    yValues.push(+data.importance);
  });
  return [xValues, yValues];
};

randomForestCsv();

export default class ForbesRanking extends React.Component {
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
      title: "Random Forest Classifier",
    },
  };

  randomForestCsv = () => {
    d3.csv(data, function (data) {
      xValues.push(data.VARIABLE_NAME);
      yValues.push(+data.importance);
    });
    this.setState({ xValues, yValues });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="option">
            <h2 className="title">Forbes Ranking Results</h2>
            <p>
              The final data set analyzed was the forbes college rankings. This
              dataset was used to determine if it could be verified that the
              calculation made by forbes was both accurate and that it reflected
              reality. The dataset released by Forbes was merged with our master
              dataset. Only the schools included in Forbes ranking were included
              from our master dataset. This resulted in a list of approximately
              640 schools. To the best of our ability the Forbes ranking
              calculation was duplicated using the our data from our master set.
            </p>
            <p>
              Forbes ranking = 20% rank on Forbes 2018 Top Colleges ranking +
              20% student debt + 20% alumni earnings + 20% net price + 10%
              graduation rate + 10% Pell Grant recipients
            </p>
            <p>
              Our dataset did not have the previous rank of Forbes from 2018.
              Also not included was the Pell Grant recipients. The formula we
              settled on to best match the Forbes formula is below.
            </p>
            <p>
              Homegrown ranking = -25% * student debt / max_debt + 25% * alumni
              earnings / max_earnings - 25% * net price / max_net_price + 25% *
              graduation rate / max_graduation_rate
            </p>
            <p>
              It was not clear from the documentation on the Forbes website how
              they related the individual variable to one another. For example
              more debt is not a good thing but a bad thing. Therefore the
              impact of that variable going up must cause the overall ranking to
              get worse. Our formula intends to address that concern by
              normalizing each value to the maximum value for each variable.
            </p>
            <p>
              When the ranking from our master dataset was compared to that of
              the Forbes model it was clear the match was not very good. It
              appeared that generally the highly ranked and lowest ranked
              schools matched, but that appeared to be about it.
            </p>
            <p>
              To further explore the problem it was decided to divide the
              rankings into segments of 5%, 10%, 20%, and 50% which made sets of
              schools of 34 * 20, 64 * 10, 128 * 5, and 320 * 2, respectively.
              Using these “bins” of rankings we then compared our ranking to
              that of the Forbes data set over various bins. It became clear
              that the models worked well for choosing 2 tiers of schools and
              reasonably well for 5 tiers. Using more tiers than that the
              accuracy of the model became quite poor. Therefore the model was
              analyzed using the 5 tier values where the results were divided
              into sets of 128.
            </p>
            <p>
              Two models were run to try to determine how the calculation
              performed on the dataset. The first was a random forest
              classification model. The second was a neural network analysis
            </p>
            <h3 className="option__text" style={{ textAlign: "center" }}>
              <a href="http://localhost:3000/College-Scorecard-Analysis/static/media/random_forest_summary_earnings_tree.0001efa3.png">
                Random Forest Forbes Tree
              </a>
            </h3>
            <img
              src={require("../assets/random_forest_summary_forbes_best_tree.png")}
              alt="random_forest_summary"
              height="100%"
              width="100%"
              className=" img-fluid"
            ></img>
            <Plot data={this.state.data} layout={this.state.layout} />
            <br></br>
            <img
              src={require("../assets/model.png")}
              alt="model"
              height="30%"
              width="30%"
              className="img-fluid"
            ></img>
            <h3 style={{ textAlign: "center" }}>Summary of Results</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Topic</th>
                  <th scope="col">Model</th>
                  <th scope="col">Unoptimized Model Score</th>
                  <th scope="col">Optimum Model Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">College Ranking</th>
                  <td>Random Forest Classification</td>
                  <td>0.588</td>
                  <td>0.60</td>
                </tr>
                <tr>
                  <th scope="row">College Ranking</th>
                  <td>Neural Network</td>
                  <td>n/a</td>
                  <td>0.4</td>
                </tr>
              </tbody>
            </table>
            <p>
              Therefore, not only did the model do a poor job of matching its
              own results, the model also did a poor job of matching the values
              from the Forbes dataset.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
