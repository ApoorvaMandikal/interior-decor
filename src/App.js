import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import Section3 from "./Components/Section3/Section3";

function App() {
  return (
    <div className="App flex flex-col">
      <Header></Header>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
    </div>
  );
}

export default App;
