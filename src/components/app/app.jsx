import { Routes, Route } from "react-router-dom";
import { Main, Menu, Table } from "../";

const App = () => {
  return (
    <div
      style={{
        width: "100%",
        paddingTop: "40px",
        height: "100vh",
        backgroundColor: "hsl(0deg 0% 93.33%)",
      }}
    >
    <div className="container main-container">
    <Menu/>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Table />
      </div>
    </div>
  );
};

export default App;
