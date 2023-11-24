import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage";

import PublicRout from "./routes/PublicRout";
import PrivateRout from "./routes/PrivateRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            // <PublicRout>
              <HomePage />
            // </PublicRout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
