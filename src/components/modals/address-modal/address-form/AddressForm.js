import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { createAddress } from "../../../../store/actions";

const AddressForm = props => {

    const [area, setArea] = useState("");
    const [address, setAddress] = useState("");
    const [street, setStreet] = useState("");
    const [building, setBuilding] = useState("");
    const [apartment, setApartment] = useState("");
    const [floor, setFloor] = useState("");
    const [mobile, setMobile] = useState("");
    const [instructions, setInstructions] = useState("");

    const onInputChange = e => {
        const input = e.target;

        const name = input.name;
        const value = input.value;

        // console.log(`${name}: ${value}`);

        switch (name) {
            case "area":
                return setArea(value);
            case "address":
                return setAddress(value);
            case "street":
                return setStreet(value);
            case "building":
                return setBuilding(value);
            case "apartment":
                return setApartment(value);
            case "floor":
                return setFloor(value);
            case "mobile":
                return setMobile(value);
            default:
                return setInstructions(value);
        }
    };

    const onSubmit = e => {
        e.preventDefault();

        // console.log("On Submit");

        // default coordinates (actual value comes from map modal)
        const coordinates = [31.200208,30.041311];

        const user_id = props.user._id;

        const addressData = {
            user: user_id,
            coordinates,
            address: {
                area,
                name: address,
                street,
                building,
                floor,
                apartment,
                mobile,
                instructions
            }
        };

        props.createAddress(addressData);

        props.onAddressEditComplete();
    };

    return (
        <form className="address-form" onSubmit={onSubmit}>
            <div className="address-form__form-fields">

                <div className="form-group">
                    <input className="form-group__input" type="text" name="area" id="area" size="30" required
                        value={area} onChange={onInputChange} />
                    <label className="form-group__label" htmlFor="area">Area</label>
                </div>

                <div className="form-group">
                    <input className="form-group__input" type="text" name="address" id="address" size="30" required
                        value={address} onChange={onInputChange} />
                    <label className="form-group__label" htmlFor="address">Address</label>
                </div>

                <div className="form-group">
                    <input className="form-group__input" type="text" name="street" id="street" size="30" required
                        value={street} onChange={onInputChange} />
                    <label className="form-group__label" htmlFor="street">Street</label>
                </div>

                <div className="form-group">
                    <input className="form-group__input" type="text" name="building" id="building" size="30" required 
                        value={building} onChange={onInputChange} />
                    <label className="form-group__label" htmlFor="building">House/Building</label>
                </div>

                <div className="form-group">
                    <input className="form-group__input" type="text" name="floor" id="floor" size="30" required 
                        value={floor} onChange={onInputChange} />
                    <label className="form-group__label" htmlFor="floor">Floor</label>
                </div>

                <div className="form-group">
                    <input className="form-group__input" type="text" name="apartment" id="apartment" size="30" required 
                        value={apartment} onChange={onInputChange} />
                    <label className="form-group__label" htmlFor="apartment">Apartment/Office</label>
                </div>

                <div className="form-group">
                    <input className="form-group__input" type="tel" name="mobile" id="mobile" size="30" pattern="[0-9]{6,20}" required 
                        value={mobile} onChange={onInputChange} />
                    <label className="form-group__label" htmlFor="mobile">Mobile</label>
                </div>

                <div className="form-group">
                    <input className="form-group__input" type="text" name="instructions" id="instructions" size="30" 
                        value={instructions} onChange={onInputChange} />
                    <label className="form-group__label" htmlFor="instructions">Instructions</label>
                </div>

            </div>

            <button className="address-form__submit">Add New</button>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { createAddress })(AddressForm);