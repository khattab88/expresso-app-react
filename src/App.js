import './App.scss';

import HomePage from './components/pages/home-page/HomePage';
import RestaurantListPage from './components/pages/restaurant-list-page/RestaurantListPage';

function App() {
  return (
    <div className="App container">
        {/* <HomePage /> */}
        <RestaurantListPage />
    </div>
  );
}

export default App;
