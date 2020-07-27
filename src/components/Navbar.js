import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
     <nav>
          <div className="sidenav">
            <Link to="/">Home</Link>
            <Link to="/visualizations">Visuals</Link>
            <Link to={"/Data"}>Data</Link>
            {/* <Link to={"/"}>Contact</Link> */}
          </div>
      </nav>
    );
  }
}
