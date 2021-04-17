import React from 'react';
import { connect } from 'react-redux';

import { updateAddress, deleteAddress } from '../../../store/actions';

const Address = props => {

    const onDeleteAddress = e => {
        const confirm =  window.confirm('Are you sure you want to delete?');
        if(confirm) {
            const id = e.target.dataset["id"];
            // console.log(id);
            props.deleteAddress(id);
            return;
        } else {
            return;
        }
    }

    return(
        <article className="address" data-id={props.id}>
            <h4 className="address__name">{props.address.name}</h4>
            <p className="address__summary">
               {
                   `Aprtment/Office: ${props.address.apartment},
                    Floor: ${props.address.floor},
                    Building: ${props.address.building},
                    Street: ${props.address.street},
                    Area: ${props.address.area}.`
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
                    <button className="address__btn address__btn--brand" data-id={props.id}>Edit</button>
                </li>
                <li>
                    <button className="address__btn" data-id={props.id} onClick={e => onDeleteAddress(e)}>Delete</button>
                </li>
            </ul>
        </article>
    );
}

export default connect(null, { updateAddress, deleteAddress })(Address);