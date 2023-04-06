const routesContent = `import React from "react";
import { Routes, Route } from "react-router-dom";
import { DEFAULT_ROUTE, HOME_ROUTE } from "../constants/appRoutes";
import HomePage from "../pages/Home/HomePage";

/**
 * Application routes
 * @returns {JSX.Element}
 * @constructor
 */
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={DEFAULT_ROUTE} element={<HomePage />} />
      <Route path={HOME_ROUTE} element={<HomePage />} />
      {/* Add your routes here */}
    </Routes>
  );
};
export default AppRoutes;
`;

module.exports = { routesContent };
