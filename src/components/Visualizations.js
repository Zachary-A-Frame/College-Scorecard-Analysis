import React from "react";


export default class Visualizations extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="option">
            <div className="row">
              <div className="column">
                <h3 className="option__text">
                  Latitude vs Max Temperature (01/05/17)
                </h3>
                <img
                  src={require("../assets/fig1.png")}
                  alt="Figure 1"
                  height="325"
                  width="400"
                  className="image"
                ></img>
              </div>

              <div className="column">
                <h3 className="option__text">
                  Latitude vs Humidity (01/05/17)
                </h3>

                <img
                  src={require("../assets/fig2.png")}
                  alt="Figure 1"
                  height="325"
                  width="400"
                  className="image"
                ></img>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <h3 className="option__text">Latitude vs Cloudiness (01/05/17)</h3>

                <img
                  src={require("../assets/fig3.png")}
                  alt="Figure 1"
                  height="325"
                  width="400"
                  className="image"
                ></img>
              </div>
              <div className="column">
                <h3 className="option__text">Latitude vs Wind Speed (01/05/17)</h3>

                <img
                  src={require("../assets/fig4.png")}
                  alt="Figure 1"
                  height="325"
                  width="400"
                  className="image"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
