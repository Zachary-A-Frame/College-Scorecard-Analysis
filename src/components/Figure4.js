import React from "react";

export default class Figure4 extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="option">
            <div className="row">
              <div className="column">
                <h3 className="option__text">
                  Latitude vs Wind Speed (01/05/17)
                </h3>

                <img
                  src={require("../assets/fig4.png")}
                  alt="Figure 1"
                  height="325"
                  width="400"
                  className="image img-fluid"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
