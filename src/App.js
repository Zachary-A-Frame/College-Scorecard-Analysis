// import React, { useState, useEffect } from "react"
import React from "react"
import "./App.css"
import "./styles/styles.scss"

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import Visualizations from "./components/Visualizations"
import MeanEarnings from "./components/MeanEarnings.js"
import RandomForest from "./components/RandomForest.js"
import IncomeResults from "./components/IncomeResults.js"
import MajorResults from "./components/MajorResults.js"
import DebtResults from "./components/DebtResults.js"
import ForbesRanking from "./components/ForbesRanking.js"
import Data from "./components/Data";
// import LoadingScreen from './components/Loading'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  const subtitle = "By Andrew Addie, Matt Moormeier, and Zach Frame"

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Header subtitle={subtitle} />
        <Navbar />
        <Switch>
          <Route
            path={`${process.env.PUBLIC_URL}/College-Scorecard-Analysis`}
            component={LandingPage}
            exact
          />
          <Route
            path={`${process.env.PUBLIC_URL}/`}
            component={LandingPage}
            exact
          />
          {/* <Route path={`${process.env.PUBLIC_URL}/Main`} component={LandingPage} /> */}
          <Route
            path={`${process.env.PUBLIC_URL}/visualizations`}
            component={Visualizations}
          />
          <Route path={`${process.env.PUBLIC_URL}/Data`} component={Data} />
          <Route
            path={`${process.env.PUBLIC_URL}/MeanEarnings`}
            component={MeanEarnings}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/RandomForest`}
            component={RandomForest}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Income`}
            component={IncomeResults}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Major`}
            component={MajorResults}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Debt`}
            component={DebtResults}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/ForbesRanking`}
            component={ForbesRanking}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App
