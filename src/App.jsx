import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Summary } from "./Pages/Summary";
import { Done } from "./Pages/Done";
import { Open } from "./Pages/Open";
import { Header } from "./Pages/Header";
import { ToDoDesc } from "./Pages/ToDoDesc";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Summary />} />
        <Route path="/done" element={<Done />} />
        <Route path="/open" element={<Open />} />
        <Route path="/done/:doneId" element={<ToDoDesc />} />
      </Routes>
    </div>
  );
}

export default App;
