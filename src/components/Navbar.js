import React from "react";
import { Link } from "react-router-dom";
// import { NavDropdown, Nav } from "react-bootstrap";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="sidenav">
          <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
          <Link to={`${process.env.PUBLIC_URL}/Income`}>Income Results</Link>
          <Link to={`${process.env.PUBLIC_URL}/Major`}>Major Results</Link>
          <Link to={`${process.env.PUBLIC_URL}/Debt`}>Debt Results</Link>
          <Link to={`${process.env.PUBLIC_URL}/ForbesRanking`}>
            Forbes Ranking Results
          </Link>
          <Link to={`${process.env.PUBLIC_URL}/Data`}>Data</Link>
        </div>
      </nav>
    );
  }
}
