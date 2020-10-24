import React from "react";

export default class IncomeLegend extends React.Component {
  render() {
    return (
      <div>
        <div className="legend">
          <h1 className="legend_title">Legend</h1>
          <div className="row">
            <p className="col" style={{ color: "#a51c30" }}>
              WDRAW_ORIG_YR2_RT
            </p>
            <p className="col" style={{ color: "#a51c30" }}>
              Percent of dependent students withdrawn from original institution
              within 2 years
            </p>
          </div>
          <div className="row">
            <p className="col">TUITFTE</p>
            <p className="col">
              Net tuition revenue per full-time equivalent student
            </p>
          </div>
          <div className="row">
            <p className="col">PCIP51</p>
            <p className="col">
              Percentage of degrees awarded in Health Professions And Related
              Programs.
            </p>
          </div>
          <div className="row">
            <p className="col" style={{ color: "#a51c30" }}>
              MARRIED
            </p>
            <p className="col" style={{ color: "#a51c30" }}>
              Share of married students
            </p>
          </div>
          <div className="row">
            <p className="col">INEXPFTE</p>
            <p className="col">
              Instructional expenditures per full-time equivalent student
            </p>
          </div>
          <div className="row">
            <p className="col">AVGFACSAL</p>
            <p className="col">Average faculty salary</p>
          </div>
          <div className="row">
            <p className="col">PCIP26</p>
            <p className="col">
              Percentage of degrees awarded in Biological And Biomedical
              Sciences.
            </p>
          </div>
          <div className="row">
            <p className="col" style={{ color: "#a51c30" }}>
              NUM41_PRIV
            </p>
            <p className="col" style={{ color: "#a51c30" }}>
              Number of Title IV students, $0-$30,000 family income (private
              for-profit and nonprofit institutions)
            </p>
          </div>
          <div className="row">
            <p className="col">AVGFACSAL</p>
            <p className="col">Average faculty salary</p>
          </div>
          <div className="row">
            <p className="col">PCIP14</p>
            <p className="col">Percentage of degrees awarded in Engineering.</p>
          </div>
          <div className="row">
            <p className="col">PCIP51</p>
            <p className="col">
              Percentage of degrees awarded in Health Professions And Related
              Programs.
            </p>
          </div>
          <div className="row">
            <p className="col">SCH_DEG</p>
            <p className="col">
              Predominant degree awarded (recoded 0s and 4s)
            </p>
          </div>
        </div>
      </div>
    );
  }
}
