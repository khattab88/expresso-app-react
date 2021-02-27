import RestaurantShowcaseHeader from './restaurant-showcase-header/RestaurantShowcaseHeader';
import RestaurantShowcaseCard from './restaurant-showcase-card/RestaurantShowcaseCard';
import LinkButton from '../shared/buttons/link-button/LinkButton';

function RestaurantShowcase() {

    const header = {
        primary: `2000+`,
        secondary: "Take your pick from our featured Restaurants. Delivered faster to your door.."
    };

    const restaurantCards = [
        {
            id: "1",
            name: "Wrap It",
            desc: "Tasty and fresh food",
            image: "/assets/img/restaurants/rest-01.jpg",
            extraClass: "restaurant-card--big",
            href: "../restaurant-menu/index.html?id=2"
        },
        {
            id: "1",
            name: "Wrap It",
            desc: "Tasty and fresh food",
            image: "../assets/img/restaurants/rest-02.jpg",
            extraClass: `restaurant-card--1`,
            href: "../restaurant-menu/index.html?id=2"
        },
        {
            id: "2",
            name: "Wrap It",
            desc: "Tasty and fresh food",
            image: "../assets/img/restaurants/rest-03.jpg",
            extraClass: `restaurant-card--2`,
            href: "../restaurant-menu/index.html?id=2"
        },
        {
            id: "3",
            name: "Wrap It",
            desc: "Tasty and fresh food",
            image: "../assets/img/restaurants/rest-04.jpg",
            extraClass: `restaurant-card--3`,
            href: "../restaurant-menu/index.html?id=2"
        },
        {
            id: "4",
            name: "Wrap It",
            desc: "Tasty and fresh food",
            image: "../assets/img/restaurants/rest-05.jpg",
            extraClass: `restaurant-card--4`,
            href: "../restaurant-menu/index.html?id=2"
        },
        {
            id: "5",
            name: "Wrap It",
            desc: "Tasty and fresh food",
            image: "../assets/img/restaurants/rest-06.jpg",
            extraClass: `restaurant-card--5`,
            href: "../restaurant-menu/index.html?id=2"
        },
        {
            id: "6",
            name: "Wrap It",
            desc: "Tasty and fresh food",
            image: "../assets/img/restaurants/rest-07.jpg",
            extraClass: `restaurant-card--6`,
            href: "../restaurant-menu/index.html?id=2"
        }
    ];

    return(
        <main className="main">
            <div className="showcase">
                <RestaurantShowcaseHeader primaryTitle={header.primary} secondaryTitle={header.secondary} />

                <RestaurantShowcaseCard restaurant={restaurantCards[0]} />

                <RestaurantShowcaseCard restaurant={restaurantCards[1]} />
                <RestaurantShowcaseCard restaurant={restaurantCards[2]} />
                <RestaurantShowcaseCard restaurant={restaurantCards[3]} />
                <RestaurantShowcaseCard restaurant={restaurantCards[4]} />
                <RestaurantShowcaseCard restaurant={restaurantCards[5]} />
                <RestaurantShowcaseCard restaurant={restaurantCards[6]} />

                <LinkButton className="showcase__show-all" href="../restaurant-list/index.html" title="Show All Restaurants" />
            </div>
        </main>
    );
}

export default RestaurantShowcase;