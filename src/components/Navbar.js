import React from "react";
import { Link } from "react-router-dom";
// import { NavDropdown, Nav } from "react-bootstrap";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="sidenav">
          <Link to="/">Home</Link>
          <Link to="/visualizations">Models</Link>
          <Link to="/Income">Income Results</Link>
          {/* <Nav>
            <NavDropdown title="Graphs" id="basic-nav-dropdown">
              <div className="dropdown-content">
                <Link to="/Figure1" className="link">
                  Lat vs Max Temp
                </Link>
                <Link to="/Figure2">Lat vs Humidity</Link>
                <Link to="/Figure3">Lat vs Cloudiness</Link>
                <Link to="/Figure4">Lat vs Wind Speed</Link>
              </div>
            </NavDropdown>
          </Nav> */}
          {/* <Link to={"/"}>Contact</Link> */}
          <Link to="/Data">Data</Link>
        </div>
      </nav>
    );
  }
}
