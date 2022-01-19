import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar name="Agustín Navarro" edad="26" />
        <Saludar name="Toni" edad="31" />
      </header>
    </div>
  );
}

export default App;
