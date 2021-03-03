import React from 'react';

import RestaurantShowcaseHeader from './restaurant-showcase-header/RestaurantShowcaseHeader';
import RestaurantShowcaseList from './restaurant-showcase-list/RestaurantShowcaseList';
import RestaurantShowcaseCard from './restaurant-showcase-card/RestaurantShowcaseCard';
import LinkButton from '../shared/buttons/link-button/LinkButton';

class RestaurantShowcase extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            restaurants: []
        }
    }

    componentDidMount() {
        const callback = () => this.setState({ isLoading: false });

        this.setState({
            restaurants: [
                {
                    id: '1',
                    name: 'Wrap Its',
                    desc: 'Tasty and fresh food',
                    img: '/assets/img/restaurants/rest-01.jpg'
                },
                {
                    id: '2',
                    name: 'Wrap Ito',
                    desc: 'Tasty and fresh food',
                    img: '/assets/img/restaurants/rest-02.jpg'
                },
                {
                    id: '3',
                    name: 'Wrap Ita',
                    desc: 'Tasty and fresh food',
                    img: '/assets/img/restaurants/rest-03.jpg'
                },
                {
                    id: '4',
                    name: 'Wrap Ite',
                    desc: 'Tasty and fresh food',
                    img: '/assets/img/restaurants/rest-04.jpg'
                },
                {
                    id: '5',
                    name: 'Wrap Itw',
                    desc: 'Tasty and fresh food',
                    img: '/assets/img/restaurants/rest-05.jpg'
                },
                {
                    id: '6',
                    name: 'Wrap Itu',
                    desc: 'Tasty and fresh food',
                    img: '/assets/img/restaurants/rest-06.jpg'
                },
                {
                    id: '7',
                    name: 'Wrap Iti',
                    desc: 'Tasty and fresh food',
                    img: '/assets/img/restaurants/rest-07.jpg'
                },
            ]
        }, callback);
    }

    render() {
        const restaurantCards = this.state.restaurants.map((restaurant, index) => {
            const card = {
                id: restaurant.id,
                name: restaurant.name,
                desc: restaurant.desc,
                image: restaurant.img,
                extraClass: (index === 0) ? "restaurant-card--big" : `restaurant-card--${index}`
            }

            return <RestaurantShowcaseCard restaurantCard={card} key={card.id} />
        });

        return (
            <main className="main">
                <div className="showcase">
                    <RestaurantShowcaseHeader />

                    {restaurantCards}

                    <LinkButton className="showcase__show-all" href="../restaurant-list/index.html" title="Show All Restaurants" />
                </div>
            </main>
        );
    }
}

export default RestaurantShowcase;