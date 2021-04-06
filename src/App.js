import React from 'react';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import './App.scss';

import HomePage from './components/pages/home-page/HomePage';
import RestaurantListPage from './components/pages/restaurant-list-page/RestaurantListPage';
import RestaurantMenuPage from './components/pages/restaurant-menu-page/RestaurantMenuPage';
import LoginPage from './components/pages/login-page/LoginPage';
import SignupPage from './components/pages/signup-page/SignupPage';
import ContactUsPage from './components/pages/contact-us-page/ContactUsPage';
import CheckoutPage from './components/pages/checkout-page/CheckoutPage';
import ProfilePage from './components/pages/profile-page/ProfilePage';
import OrdersPage from './components/pages/orders-page/OrdersPage';
import Logout from './components/logout/Logout';
import TestPage from './components/pages/test/TestPage';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App container">
        
        <Router>
          <Switch>
            <Route exact path="/restaurant-list">
              <RestaurantListPage />
            </Route>
            <Route path="/restaurant-menu/:branchId">
              <RestaurantMenuPage/>
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/signup">
              <SignupPage />
            </Route>
            <Route exact path="/contact-us">
              <ContactUsPage />
            </Route>
            <Route exact path="/checkout">
              <CheckoutPage />
            </Route>
            <Route exact path="/profile">
              <ProfilePage />
            </Route>
            <Route exact path="/orders">
              <OrdersPage />
            </Route>
            <Route path="/test">
              <TestPage />
            </Route>
            <Route exact path="/logout">
              <Logout />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
