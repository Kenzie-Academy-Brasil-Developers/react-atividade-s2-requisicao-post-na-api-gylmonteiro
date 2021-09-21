import "./App.css";
import Display from "./components/display";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login></Login>
        <Display></Display>
      </header>
    </div>
  );
}

export default App;
