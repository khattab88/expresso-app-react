import Nav from "../../nav/Nav";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import CategoriesShowcase from "../../categories-showcase/CategoriesShowcase";
import RestaurantsShowcase from "../../restaurants-showcase/RestaurantsShowcase";

function Home() {
    return(
        <div className="Home">
            <Nav />
            <Header />
            <CategoriesShowcase />
            <RestaurantsShowcase />
            <Footer />
        </div>
    );
}

export default Home;