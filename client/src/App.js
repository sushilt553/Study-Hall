import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import AuthRoute from './components/util/AuthRoute';
import ProtectedRoute from './components/util/ProtectedRoute';
import CategoryShowPage from './pages/CategoryShowPage';
import ErrorPage from './pages/ErrorPage';
import SplashPage from './pages/SplashPage';
import Navbar from './pages/Navbar';

import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <ProtectedRoute path={`/category/:categoryId`} component={CategoryShowPage} />
          <ProtectedRoute path={`/home`} component={HomePage} />         
          <AuthRoute exact path={`/`} component={SplashPage} />
          <Route path={`/`} component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
