import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
