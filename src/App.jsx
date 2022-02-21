import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/header";
import { HomePage } from "./components/homepage";
import { Routes, Route } from "react-router-dom";
import { AlignItemsList } from "./components/searchresult";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search?q=YourQuery" element={<AlignItemsList />} />
      </Routes>
    </div>
  );
}

export default App;
