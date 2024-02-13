import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyCompass from "./pages/MyCompass";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import IsPrivate from "./components/IsPrivate";
import IsAnonym from "./components/IsAnonym";
import CompassOverview from "./pages/CompassOverview";
import Account from "./pages/Account";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/my-compass/"
          element={
            <IsPrivate>
              <MyCompass />
            </IsPrivate>
          }
        />
        <Route
          path="/compass/overview/:compassId"
          element={
            <IsPrivate>
              <CompassOverview />
            </IsPrivate>
          }
        />
        <Route
          path="/account"
          element={
            <IsPrivate>
              <Account />
            </IsPrivate>
          }
        />
        <Route
          path="/signup"
          element={
            <IsAnonym>
              <Signup />
            </IsAnonym>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnonym>
              <Login />
            </IsAnonym>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
