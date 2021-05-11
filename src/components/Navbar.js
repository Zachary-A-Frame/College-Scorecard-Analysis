import React from "react";
import { Link } from "react-router-dom";
// import { NavDropdown, Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <nav>
      <div className="sidenav">
        <div>
          <Link to={`${process.env.PUBLIC_URL}/`}>
            <img
              src={require("../assets/home.svg")}
              style={{ width: "20%" }}
              alt="home img"
            />
            &nbsp;&nbsp; Home
          </Link>
        </div>
        <div>
          <Link to={`${process.env.PUBLIC_URL}/Income`}>
            <img
              src={require("../assets/money.svg")}
              style={{ width: "20%" }}
              alt="home img"
            />
            &nbsp;&nbsp; Income Results
          </Link>
        </div>
        <div>
          <Link to={`${process.env.PUBLIC_URL}/Major`}>
            <img
              src={require("../assets/library.svg")}
              style={{ width: "20%" }}
              alt="home img"
            />
            &nbsp;&nbsp; Major Results
          </Link>
        </div>
        <div>
          <Link to={`${process.env.PUBLIC_URL}/Debt`}>
            <img
              src={require("../assets/wallet.svg")}
              style={{ width: "20%" }}
              alt="home img"
            />
            &nbsp;&nbsp; Debt Results
          </Link>
        </div>
        <div>
          <Link to={`${process.env.PUBLIC_URL}/ForbesRanking`}>
            <img
              src={require("../assets/forbes-logo.jpg")}
              style={{ width: "20%" }}
              alt="home img"
            />
            &nbsp;&nbsp; Forbes Results
          </Link>
        </div>
        <div>
          <Link to={`${process.env.PUBLIC_URL}/Data`}>
            <img
              src={require("../assets/document.svg")}
              style={{ width: "20%" }}
              alt="home img"
            />
            &nbsp;&nbsp; Data
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
