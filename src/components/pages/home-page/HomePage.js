import Nav from "../../nav/Nav";
import HomeHeader from "../../headers/home-header/HomeHeader";
import Footer from "../../footer/Footer";
import CategoriesShowcase from "../../categories-showcase/CategoriesShowcase";
import RestaurantsShowcase from "../../restaurants-showcase/RestaurantsShowcase";

function HomePage() {
    return(
        <div className="Home">
            <Nav />
            <HomeHeader />
            <CategoriesShowcase />
            <RestaurantsShowcase />
            <Footer />
        </div>
    );
}

export default HomePage;