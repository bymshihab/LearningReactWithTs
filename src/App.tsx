import "./App.css";
import { Greet } from "./components/Greet/Greet";
import { NameObj } from "./components/NameObj/Name";

function App() {
  const personName = {
    first: "Khaled",
    middle: "Shihab",
    last: "Jubair",
  };
  return (
    <div className="App ">
      <Greet name="Shihab" messageCount={210} loggedIn={true} />
      <NameObj personName={personName} />
    </div>
  );
}

export default App;
