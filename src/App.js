import React from "react";
import { Html } from "./components/Html";
import { Css } from "./components/Css";
import { Java } from "./components/Java";
import { Save } from "./components/Save";

import "./components/common.css"

function App() {
  return (
    <div className="App">
      <Html/>
      <Css />
      <Java />
      <Save/>
      </div>
  );
}

export default App;
