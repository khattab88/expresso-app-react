import './App.scss';

import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CategoriesShowcase from "./components/categories-showcase/CategoriesShowcase";
import RestaurantsShowcase from "./components/restaurants-showcase/RestaurantsShowcase";

function App() {
  return (
    <div className="App container">
        <Nav />
        <Header />
        <CategoriesShowcase />
        <RestaurantsShowcase />
        <Footer />
    </div>
  );
}

export default App;
