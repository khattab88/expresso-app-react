import './App.scss';

import HomePage from './components/pages/home-page/HomePage';
import RestaurantListPage from './components/pages/restaurant-list-page/RestaurantListPage';
import RestaurantMenuPage from './components/pages/restaurant-menu-page/RestaurantMenuPage';
import LoginPage from './components/pages/login-page/LoginPage';
import SignupPage from './components/pages/signup-page/SignupPage';

function App() {
  return (
    <div className="App container">
        {/* <HomePage /> */}
        {/* <RestaurantListPage /> */}
        {/* <RestaurantMenuPage /> */}
        {/* <LoginPage /> */}
        <SignupPage />
    </div>
  );
}

export default App;
