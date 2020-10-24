import React from "react";
import { CsvToHtmlTable } from "react-csv-to-table";
import { collegeListData } from "../Resources/collegeListData"
import { ColumnHeadings } from "../Resources/ColumnHeadings.js"

export default class Data extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="title" id="top">
            Raw Data
          </h1>
          <p>
            This file provides data descriptions for each data element provided
            in College Scorecard. Please note that datafiles available in the
            “Download All Data” provide more data elements and represent a
            larger universe of institutions than what is presented in the
            Scorecard consumer page{" "}
            <a
              href="https://collegescorecard.ed.gov"
              target="_blank"
              rel="noreferrer noopener"
            >
              here
            </a>{" "}
            . For more information on College Scorecard data,{" "}
            <a
              href="https://collegescorecard.ed.gov/data/documentation/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              Click Here
            </a>
            <br></br>
          </p>
          <h3>
            <a href="https://ed-public-download.app.cloud.gov/downloads/CollegeScorecard_Raw_Data.zip">
              <button type="button" className="btn btn-success">
                Download CSV{" "}
              </button>
            </a>
          </h3>
          For an explanation of rankings,
          <a
            href="https://www.forbes.com/top-colleges/#7b9bf65c1987"
            target="_blank"
            rel="noreferrer noopener"
          >
            Click Here
          </a>
          <br></br>
          For the raw data,
          <a
            href="https://www.kaggle.com/chris95cam/forbes-americas-top-colleges-2019/version/2"
            target="_blank"
            rel="noreferrer noopener"
          >
            Click Here
          </a>
        </div>
        <br></br>
        <p className="container">
          The college scorecard contains nearly 2000 columns of data, to aid in
          finding particular pieces of data we have added an alphabetical
          appendix. Use Cntrl + F to navigate to the column you want to
          understand better.
          <a href="#college-list-data">Go To College List</a>
        </p>
        <div className="containerdata" id="column-headings">
          <h1>Column Appendix</h1>
          <CsvToHtmlTable
            data={ColumnHeadings}
            csvDelimiter=","
            tableClassName="table table-striped table-hover"
          />
        </div>
        <div className="containerdata" id="college-list-data">
          <h1>College List Data</h1>
          <a href="#top">Back to Top</a>
          <CsvToHtmlTable
            data={collegeListData}
            csvDelimiter=","
            tableClassName="table table-striped table-hover"
          />
        </div>
      </div>
    );
  }
}
