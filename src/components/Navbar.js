import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <Router>
          <div className="sidenav">
            <Link to="/">Home</Link>
            <Link to="/visualizations">Visuals</Link>
            {/* <Link to={"/Data"}>Comparison</Link> */}
            {/* <Link to={"/"}>Contact</Link> */}
          </div>
      </Router>
    );
  }
}
