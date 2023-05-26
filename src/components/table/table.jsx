import React from "react";
import ReactDOM from "react-dom";

import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { StickyHeadTable } from "../";

const Table = () => {
  return (
    <div className="tabl">
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button btn btn-secondary shadow-lg mb-5 bg-body-tertiary rounded"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download excel"
      />
      <h2 style={{ textAlign: "center" }}>
        Energy metering Report from <br /> 01.05.2023 to 31.05.2023
      </h2>
      <p style={{padding: "15px"}}>Energy metering Report from 01.05.2023 to 31.05.2023
      day interval
      АГМК МОФ Организация-2 Substation Mod NC-100 Feeder buy No: 5. Feeder bay id: BB-3-2-588M Voltage transformer: 1 Current transformer: 1 BINOM339 80000207 Voltage class Name of measuring instrument Serial Ne BINOM3
      Supplier
      Consumer
      Location
      Ratio factor</p>
      <div className="tabled">
        <table
          id="table-to-xls"
         
        >
          <StickyHeadTable />
        </table>
      </div>
    </div>
  );
};

export default Table;
