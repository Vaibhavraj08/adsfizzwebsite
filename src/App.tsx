import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppRoutes />
    </Router>
  );
}

export default App;