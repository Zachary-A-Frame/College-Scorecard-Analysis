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
        <div className="container" style={{ margin: "0 auto" }}>
          <div className="option">
            <h2 className="title">Forbes Ranking Results</h2>
            <p>
              The final data set analyzed was the Forbes Top College Rankings.
              This dataset was used to determine if it could be verified that
              the calculation made by Forbes was both accurate and that it
              reflected reality. The dataset released by Forbes was merged with
              our master dataset. Only the schools included in Forbes ranking
              were included from our master dataset. This resulted in a list of
              approximately 640 schools. To the best of our ability the Forbes
              ranking calculation was duplicated using our data from our master
              set.
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
              they related the individual variable to one another. For example,
              more debt is not a good thing but a bad thing. Therefore, the
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
              To further explore the problem, it was decided to divide the
              rankings into segments of 5%, 10%, 20%, and 50% which made sets of
              schools of 34 * 20, 64 * 10, 128 * 5, and 320 * 2, respectively.
              Using these “bins” of rankings we then compared our ranking to
              that of the Forbes data set over various bins. It became clear
              that the models worked well for choosing 2 tiers of schools and
              reasonably well for 5 tiers. Using more tiers than that the
              accuracy of the model became quite poor. Therefore, the model was
              analyzed using the 5 tier values where the results were divided
              into sets of 128.
            </p>
            <p>
              Two models were run to try to determine how the calculation
              performed on the dataset. The first was a random forest
              classification model. The second was a neural network analysis.
            </p>
            <hr></hr>
            <p>
              Don’t take College rankings from websites at face value. Rankings
              at the top of the list and bottom of the list are more accurate.
              Reasonable accuracy when data is divided into quintiles. Forbes
              data has several subjective measurements that the College
              Scorecard does not have such as; Student Satisfaction (20%), which
              includes results from Niche surveys on professor quality and data,
              American Leaders (15%), which is based on our Forbes database of
              successful people, including billionaires, powerful women, 30
              Under 30 honorees, leaders in public service and in private
              enterprise, Academic Success (12.5%), which rewards schools whose
              alumni win prestigious scholarships and fellowships like the
              Rhodes and the Fulbright or have earned Ph.Ds.
            </p>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">bin</th>
                  <th scope="col">segment</th>
                  <th scope="col">school rank</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>0</th>
                  <td>0%-20%</td>
                  <td>1-128</td>
                </tr>
                <tr>
                  <th>1</th>
                  <td>20%-40%</td>
                  <td>129 - 256</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>40% - 60%</td>
                  <td>257 - 384</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>60% - 80%</td>
                  <td>385 - 512</td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>80% - 100%</td>
                  <td>512 - 640</td>
                </tr>
              </tbody>
            </table>
            <div>
              <p style={{ marginLeft: "65%" }}>Random Forest</p>
              <img
                src={require("../assets/confusion-matrix.png")}
                alt="random_forest_summary"
                height="100%"
                width="50%"
                className=" img-fluid"
                style={{ float: "left" }}
              ></img>
              <img
                src={require("../assets/confusion-matrix-2.png")}
                alt="random_forest_summary"
                height="100%"
                width="50%"
                className=" img-fluid"
                style={{ float: "left" }}
              ></img>
            </div>
            <br></br>
            <br></br>
            <h3 className="option__text">
              <a
                href="https://zachary-a-frame.github.io/College-Scorecard-Analysis/static/media/random_forest_summary_forbes_best_tree.d4dc0fd9.png"
                style={{ textAlign: "center" }}
                target="_blank"
                rel="noreferrer noopener"
              >
                Random Forest Forbes Tree{" "}
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
            <img
              src={require("../assets/random_forest_summary_forbes_best_tree.png")}
              alt="random_forest_summary"
              height="100%"
              width="100%"
              className=" img-fluid"
            ></img>
            <div className="Plot">
              <Plot data={this.state.data} layout={this.state.layout} />
            </div>
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
