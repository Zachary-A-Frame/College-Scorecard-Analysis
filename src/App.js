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

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Data from "./components/Data"

function App() {
  const subtitle = "Final Project"

  return (
    <Router>
      <Header subtitle={subtitle} />
      <Navbar />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/web-design-challenge" component={LandingPage} />
        <Route path="/visualizations" component={Visualizations} />
        <Route path="/data" component={Data} />
        <Route path="/MeanEarnings" component={MeanEarnings} />
        <Route path="/RandomForest" component={RandomForest} />
        <Route path="/Income" component={IncomeResults} />
        <Route path="/Major" component={MajorResults} />
        <Route path="/Debt" component={DebtResults} />
        <Route path="/ForbesRanking" component={ForbesRanking} />
      </Switch>
    </Router>
  )
}

export default App
