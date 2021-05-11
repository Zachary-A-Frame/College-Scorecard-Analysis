import React from "react";


const DebtLegend = () => {

    return (
      <div>
        <div className="legend">
          <h1 className="legend_title">Legend</h1>
          <div className="row">
            <p className="col" style={{ color: "#a51c30" }}>
              HI_INC_COMP_ORIG_YR4_RT
            </p>
            <p className="col" style={{ color: "#a51c30" }}>
              Percent of high-income (above $75,000 in nominal family income)
              students who completed within 4 years at original institution
            </p>
          </div>
          <div className="row">
            <p className="col">UGDS_HISP</p>
            <p className="col">
              Total share of enrollment of undergraduate degree-seeking students
              who are Hispanic
            </p>
          </div>
          <div className="row">
            <p className="col">TUITFTE</p>
            <p className="col">
              Net tuition revenue per full-time equivalent student
            </p>
          </div>
          <div className="row">
            <p className="col">COSTT4_A</p>
            <p className="col">
              Average cost of attendance (academic year institutions)
            </p>
          </div>
          <div className="row">
            <p className="col">PCIP04</p>
            <p className="col">
              Percentage of degrees awarded in Architecture And Related
              Services.
            </p>
          </div>
          <div className="row" style={{ color: "#a51c30" }}>
            <p className="col">INEXPFTE</p>
            <p className="col">
              Instructional expenditures per full-time equivalent student
            </p>
          </div>
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
            <p className="col">MD_FAMINC</p>
            <p className="col">Median family income in real 2015 dollars</p>
          </div>
          <div className="row">
            <p className="col">PCIP04</p>
            <p className="col">
              Percentage of degrees awarded in Architecture And Related
              Services.
            </p>
          </div>
          <div className="row" style={{ color: "#a51c30" }}>
            <p className="col">PCIP05</p>
            <p className="col">
              Percentage of degrees awarded in Area, Ethnic, Cultural, Gender,
              And Group Studies.
            </p>
          </div>
          <div className="row">
            <p className="col">WDRAW_ORIG_YR8_RT</p>
            <p className="col">
              Percent withdrawn from original institution within 8 years
            </p>
          </div>
          <div className="row">
            <p className="col">TUITIONFEE_IN</p>
            <p className="col">In-state tuition and fees</p>
          </div>
        </div>
      </div>
    );
}

export default DebtLegend
