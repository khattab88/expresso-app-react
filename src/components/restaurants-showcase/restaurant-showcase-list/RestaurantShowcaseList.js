import React from 'react';

import RestaurantShowcaseCard from '../restaurant-showcase-card/RestaurantShowcaseCard';

class RestaurantShowcaseList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cardList = this.props.cards.map(card => <RestaurantShowcaseCard key={card.id} restaurantCard={card} />);

        return (
            <div>
                {cardList}
            </div>
        );
    }
}

export default RestaurantShowcaseList;