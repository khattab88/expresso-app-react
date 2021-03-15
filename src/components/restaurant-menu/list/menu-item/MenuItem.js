import React from 'react';

class MenuItem extends React.Component {
    constructor(props) {
        super(props);

        this.open = this.open.bind(this);
    }

    open(e) {
        const target = e.target.closest(".menu-item");
        const itemId = target.id;

        this.props.renderMenuItemModal(itemId);

        this.props.toggleMenuItemModal();
    }

    render() {
        const backgroundImage = { backgroundImage: `url(${this.props.item.image})` };

        return (
            <article className="menu-item" id={this.props.item.id} onClick={this.open}>
                <div className="menu-item__img" style={ backgroundImage }></div>
                <div className="menu-item__detail">
                    <div className="menu-item__detail-box">
                        <h4 className="menu-item__name">{this.props.item.name}</h4>
                        <p className="menu-item__price">{`${this.props.item.price} EGP`}</p>
                    </div>
                    <p className="menu-item__desc">{this.props.item.description}</p>
                </div>
            </article>
        );
    }
}

export default MenuItem;