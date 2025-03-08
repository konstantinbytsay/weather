import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routesConfig } from "./routes/routes.config";
import "@src/styles/styles.scss";
import { CityProvider } from "./contexts/CityProvider";

const App: React.FC = () => {
  return (
    <div className="container">
      <CityProvider>
        <Router>
          <Routes>
            {routesConfig.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Router>
      </CityProvider>  
    </div>
  );
};

export default App;
