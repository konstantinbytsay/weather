import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routesConfig } from "./routes/routes.config";
import "@src/styles/styles.scss";
import { server } from "./mocks/node";

server.listen();
const App: React.FC = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
