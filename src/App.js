import React from 'react';

import './App.scss';

import HomePage from './components/pages/home-page/HomePage';
import RestaurantListPage from './components/pages/restaurant-list-page/RestaurantListPage';
import RestaurantMenuPage from './components/pages/restaurant-menu-page/RestaurantMenuPage';
import LoginPage from './components/pages/login-page/LoginPage';
import SignupPage from './components/pages/signup-page/SignupPage';
import ContactUsPage from './components/pages/contact-us-page/ContactUsPage';
import CheckoutPage from './components/pages/checkout-page/CheckoutPage';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App container">
          {/* <HomePage /> */}
          {/* <RestaurantListPage /> */}
          {/* <RestaurantMenuPage /> */}
          {/* <LoginPage /> */}
          {/* <SignupPage /> */}
          {/* <ContactUsPage /> */}
          <CheckoutPage />
      </div>
    );
  }
}

export default App;
