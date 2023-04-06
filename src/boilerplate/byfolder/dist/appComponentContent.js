const appComponentContent = `import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/store';
import AppRoutes from '../../routes/appRoutes';
/**
 * App Component which is initiating the application
 * @returns
 */
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        {/* Application routes */}
        <AppRoutes />
      </Router>
    </Provider>
  );
};

export default App;
`;

module.exports = {appComponentContent};
