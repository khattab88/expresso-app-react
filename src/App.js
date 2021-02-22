import './App.scss';

import HomePage from './components/pages/home-page/HomePage';
import RestaurantListPage from './components/pages/restaurant-list-page/RestaurantListPage';
import RestaurantMenuPage from './components/pages/restaurant-menu-page/RestaurantMenuPage';

function App() {
  return (
    <div className="App container">
        {/* <HomePage /> */}
        {/* <RestaurantListPage /> */}
        <RestaurantMenuPage />
    </div>
  );
}

export default App;
