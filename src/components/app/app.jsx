import { Table } from "@mui/material";
import React from "react";

import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { StickyHeadTable } from "../";

const App = () => {
  return (
    <div>
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"
      />
      <div className="App container" sx={{ overflowX: "scroll" }}>
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
