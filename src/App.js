import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage";

import PublicRout from "./routes/PublicRout";
import PrivateRout from "./routes/PrivateRoute";
import AnalyticsPage from "./pages/analytics/AnalyticsPage";
import SimulationBank from "./pages/simulationBank/SimulationBank";

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
          <Route
              path="/analytics"
              element={
                  // <PublicRout>
                  <AnalyticsPage />
                  // </PublicRout>
              }
          />
          <Route
          path="/simulation"
          element={
            // <PublicRout>
              <SimulationBank />
            // </PublicRout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
