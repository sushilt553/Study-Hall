import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import AuthRoute from './components/util/AuthRoute';
import ProtectedRoute from './components/util/ProtectedRoute';
import ErrorPage from './pages/ErrorPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
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
          <ProtectedRoute path={`/home`} component={HomePage} />
          <AuthRoute path={`/signup`} component={Signup} />         
          <AuthRoute path={`/login`} component={Login} />         
          <Route exact path={`/`} component={SplashPage} />
          <Route path={`/`} component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
