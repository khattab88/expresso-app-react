import React from 'react';

const Address = props => {
    return(
        <article className="address" data-id={props.address.id}>
            <h4 className="address__name">{props.address.name}</h4>
            <p className="address__summary">
               {
                   `Aprtment/Office: ${props.address.apartment},
                    Floor: ${props.address.floor},
                    Building: ${props.address.building},
                    Street: ${props.address.street},
                    Area: ${props.address.area}.
                   `
                } 
            </p>
            <p className="address__detail">
                <span>Mobile:</span>
                {props.address.mobile}
            </p>
            <p className="address__detail">
                <span>Instructions:</span>
                {props.address.instructions}
            </p>
            <ul className="address__control">
                <li>
                    <button className="address__btn address__btn--brand">Edit</button>
                </li>
                <li>
                    <button className="address__btn">Delete</button>
                </li>
            </ul>
        </article>
    );
}

export default Address;