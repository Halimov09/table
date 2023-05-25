import { Table } from "@mui/material";
import React from "react";

import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { StickyHeadTable } from "../";

const App = () => {
  return (
    <div className="table table-light table-striped" style={{backgroundColor: "rgb(248 249 250)", height: "100vh"}}>
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"
      />
      <div className="App container"  >
        <Table
          id="table-to-xls"
          sx={{ minWidth: 650, overflowX: "scroll" }}
          aria-label="simple table"
        >
          <StickyHeadTable />
        </Table>
      </div>
    </div>
  );
};

export default App;
