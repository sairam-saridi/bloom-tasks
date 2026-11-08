import { useState } from "react";
import Overview from "./components/Overview";
import Taskboard from "./components/Taskboard";

function App() {
  return (
    <div className="app-container">
      <Overview />
      <Taskboard />
      {
      //<ProjectList /> 
      }
    </div>
  );
}

export default App;