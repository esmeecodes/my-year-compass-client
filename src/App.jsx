import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyCompass from "./pages/MyCompass";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-compass/" element={<MyCompass />} />
      </Routes>
    </div>
  );
}

export default App;
