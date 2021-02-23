import './App.scss';

import HomePage from './components/pages/home-page/HomePage';
import RestaurantListPage from './components/pages/restaurant-list-page/RestaurantListPage';
import RestaurantMenuPage from './components/pages/restaurant-menu-page/RestaurantMenuPage';
import LoginPage from './components/pages/login-page/LoginPage';

function App() {
  return (
    <div className="App container">
        {/* <HomePage /> */}
        {/* <RestaurantListPage /> */}
        {/* <RestaurantMenuPage /> */}
        <LoginPage />
    </div>
  );
}

export default App;
