import React from 'react';

class CategoryCard extends React.Component {
    constructor(props) {
        super(props);

        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(e) {
        e.preventDefault();

        const target = e.target.closest('.category-card');

        const selectedId = target.dataset["id"];
        this.props.select(selectedId);
    }

    render() {
        const className = this.props.active 
                            ? "category-card category-card--active"
                            : "category-card";

        return (
            <li className={className} data-id={this.props.category.id} data-active={this.props.active} onClick={this.onSelect}>
                <div className="category-card__head">
                    <img className="category-card__icon" src={this.props.category.image} alt={this.props.category.name} />
                </div>
                <div className="category-card__body">
                    <h4 className="category-card__name">{this.props.category.name}</h4>
                </div>
            </li>
        );
    }
}

export default CategoryCard;