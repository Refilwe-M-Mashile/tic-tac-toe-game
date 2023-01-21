import { Board } from "../board/Board";
import { Side } from "../side/Side";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Side player="1" avatar="🔥" status="" />
      <Board />
      <Side player="2" avatar="💧" status="" />
    </div>
  );
}

export default App;
