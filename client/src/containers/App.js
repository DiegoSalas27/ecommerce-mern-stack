import React from 'react';
import '../css/custom-style.css';
import Main from '../components/pages/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductDetails from '../components/pages/ProductDetails';
import Auth from '../components/pages/Auth';
import AdminDashboard from '../components/pages/dashboard/AdminDashboard';
import jwt_decode from 'jwt-decode';
import setJWT from '../securityUtils/setJWT';
import { SET_CURRENT_USER } from "../actions/types";
import { logout } from '../actions/securityActions'; 
import store from '../store';
import SecureRoute from '../securityUtils/SecureRoute';

const jwt = localStorage.jwtToken

if (jwt) {
  setJWT(jwt)
  const decode_jwt = jwt_decode(jwt);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decode_jwt
  });

  const currentTime = Date.now()/1000;
  if(decode_jwt.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
} 

function App() {
  return (
    <Router>
      <Route exact path ="/" component={Main} />
      <Route exact path ="/product-details" component={ProductDetails} />
      <Route exact path ="/auth" component={Auth} />
      <Switch>
        <SecureRoute exact path ="/admin-dashboard" component={AdminDashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
