import React from "react";


const Header = (props) => (
  <div>
    <div className="container" style={{ margin: "0 auto" }}>
      <div className="option">
        <h2 className="title">Summary Page</h2>
        {/* <img
          src={require("../assets/fig1.png")}
          alt="Figure 1"
          height="325"
          width="400"
          className="image"
        ></img> */}
        <p className="option__text">
          As the cost of a college education continues to rise many families are
          asking “is it worth it” to attend college? We dig a little deeper by
          asking more specific questions such as;
        </p>
        <br></br>
        <p className="option__text">
          <li>
            What factors are most important in determining the highest starting
            income in the first two years after graduating college?
          </li>
          <li>
            What factors are the most important in determining the highest
            starting income based on major selection?
          </li>
          <li>
            What factors are most prevalent that determine the highest amount of
            debt and highest chance of defaulting on student loans?
          </li>
          <li>
            How accurate are popular college rankings such as the Forbes College
            Rankings list?
          </li>
        </p>
      </div>
      <br></br>
      <h3>To select which models to run we utilized the following guide.</h3>
      <img
        src={require("../assets/ml-mapOnHomepage.png")}
        id="ml-map"
        alt="ml-map"
        style={{ maxWidth: "100%" }}
        className="image image-fluid"
      />
    </div>
  </div>
);

Header.defaultProps = {
  title: "College Scorecard Analysis",
};

export default Header;
