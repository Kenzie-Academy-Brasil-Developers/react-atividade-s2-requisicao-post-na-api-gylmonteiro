import { useState } from "react";
import "./App.css";
import Display from "./components/display";
import Login from "./components/login";

function App() {
  const [display, setDisplay] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <Login setDisplay={setDisplay}></Login>
        <Display display={display}></Display>
      </header>
    </div>
  );
}

export default App;
