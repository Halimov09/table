import { Table } from "@mui/material";
import React from "react";

import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { StickyHeadTable } from "../";

const App = () => {
  return (
    <div>
      <div className="App container">
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Download as XLS"
        />
        <Table
          id="table-to-xls"
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <StickyHeadTable />
        </Table>
      </div>
    </div>
  );
};

export default App;
