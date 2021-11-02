import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from '../src/Layouts/MainLayout';

const App = () => {
  return (
    <div>
      <Router>
        <MainLayout />
        <Switch></Switch>
      </Router>
    </div>
  );
};

export default App;
