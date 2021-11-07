import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from '../src/Layouts/MainLayout';
import MainPage from '../src/components/MainPage';
const App = () => {
  return (
    <div>
      <Router>
        <MainLayout />
        <Switch>
          <MainPage />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
