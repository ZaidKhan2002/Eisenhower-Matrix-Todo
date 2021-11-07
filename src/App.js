import React from 'react';
import "./App.css"
import Container from './components/Container';
import TodoApp from './components/TodoApp';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Signup from './components/Signup';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
  <div>
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Container}/>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/todoapp" component={TodoApp} />
        </Switch>
      </AuthProvider>
    </Router>
  </div>
       
  );
}

export default App;
