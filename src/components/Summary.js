import React from "react";

const Header = (props) => (
  <div>
    <div className="container">
      <div className="option">
        <h2 className="title">Summary: Latitude vs. X</h2>
        <img
          src={require("../assets/fig1.png")}
          alt="Figure 1"
          height="325"
          width="400"
          className="image"
        ></img>
        <p className="option__text">
          The purpose of this project was to analyze how weather changes as you
          get closer to the equator. To accomplish this analysis, we first
          pulled data from the OpenWeatherMap API to assemble a dataset on over
          500 cities.
        </p>
        <br></br>
        <p className="option__text">
          After assembling the dataset, we used MatPlotLib to plot various
          aspects of the weather vs. latitude. Factors we looked at included:
          temperature, cloudiness, wind speed, and humidity. This site provides
          the source data and visualizations created as part of the analysis, as
          well as the explanations and descriptions of any trends and
          correlations witnessed.
        </p>
      </div>
    </div>
  </div>
);

Header.defaultProps = {
  title: "Climate Analysis",
};

export default Header;
