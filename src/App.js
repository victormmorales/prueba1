import logo from "./logo.svg";
import "./App.css";
import HolaMundo, { AdiosMundo } from "./components/HolaMundo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <HolaMundo />
        <AdiosMundo />
      </header>
    </div>
  );
}

export default App;
