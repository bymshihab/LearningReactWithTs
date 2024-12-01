import "./App.css";
import { Greet } from "./components/Greet/Greet";
import { NameListArr } from "./components/NameListArr/NameListArr";
import { NameObj } from "./components/NameObj/Name";

function App() {
  const personName = {
    first: "Khaled",
    middle: "Shihab",
    last: "Jubair",
  };

  const NameArr = [
    { firstName: "Abul", lastName: "Kashem" },
    { firstName: "Babul", lastName: "Kashem" },
    { firstName: "Kabul", lastName: "Kashem" },
    { firstName: "Dabul", lastName: "Kashem" },
    { firstName: "Eabul", lastName: "Kashem" },
    { firstName: "Fabul", lastName: "Kashem" },
  ];

  return (
    <div className="App ">
      <Greet name="Shihab" messageCount={210} loggedIn={true} />
      <hr />
      <NameObj personName={personName} />
      <hr />
      <NameListArr NameArr={NameArr} />
      <hr />
    </div>
  );
}

export default App;
