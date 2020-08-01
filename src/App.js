import React from "react";
import "./App.css";
import "./styles/styles.scss"

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import Visualizations from "./components/Visualizations"
import Figure1 from "./components/Figure1.js"
import Figure2 from "./components/Figure2.js"
import Figure3 from "./components/Figure3.js"
import Figure4 from "./components/Figure4.js"
import Api from "./components/Api.js"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Data from "./components/Data"

function App() {
  const subtitle = "An Analysis by Zach Frame"

  return (
    <Router>
      <Header subtitle={subtitle} />
      <Navbar />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/web-design-challenge" component={LandingPage} />
        <Route path="/visualizations" component={Visualizations} />
        <Route path="/data" component={Data} />
        <Route path="/apiData" component={Api} />
        <Route path="/figure1" component={Figure1} />
        <Route path="/figure2" component={Figure2} />
        <Route path="/figure3" component={Figure3} />
        <Route path="/figure4" component={Figure4} />
      </Switch>
    </Router>
  );
}

export default App;
