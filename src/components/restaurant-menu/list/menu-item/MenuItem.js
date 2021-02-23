import React from 'react';

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className="menu-item" id={this.props.item.id}>
                <div className="menu-item__img" style={this.props.item.img}></div>
                <div className="menu-item__detail">
                    <div className="menu-item__detail-box">
                        <h4 className="menu-item__name">{this.props.item.name}</h4>
                        <p className="menu-item__price">{this.props.item.price}</p>
                    </div>
                    <p className="menu-item__desc">{this.props.item.desc}</p>
                </div>
            </article>
        );
    }
}

export default MenuItem;