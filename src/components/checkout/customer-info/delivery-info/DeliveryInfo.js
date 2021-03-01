import React from 'react';

class DeliveryInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            address: this.props.delivery.address,
            street: this.props.delivery.street,
            area: this.props.delivery.area,
            city: this.props.delivery.city,
            building: this.props.delivery.building,
            apartment: this.props.delivery.apartment,
            floor: this.props.delivery.floor,
            instructions: this.props.delivery.instructions,
            mobile: this.props.delivery.mobile,
            location: this.props.delivery.location,
            time: this.props.delivery.time,
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Address: ${this.state.address}`);
        console.log(`Street: ${this.state.street}`);
    }

    onInputChange(e) {
        const input = e.target;

        const name = input.name;
        const value = input.value;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <section className="checkout-info-box delivery-info">

                <form onSubmit={this.onSubmit}>
                    <h4 className="delivery-info__heading">Delivery Details</h4>
                    <div className="delivery-info__form">
                        <h5 className="delivery-info__form-title">
                            Add new - <span className="delivery-info__form-address">Heliopolis, Cairo</span>
                        </h5>
                        <div className="delivery-info__form-fields">

                            <div className="form-group">
                                <input className="form-group__input" type="text" name="address" id="address" size="30" required value={this.state.address} onChange={this.onInputChange} />
                                <label className="form-group__label" htmlFor="address">Address</label>
                            </div>
                            <div className="form-group">
                                <input className="form-group__input" type="text" name="street" id="street" size="30" required value={this.state.street} onChange={this.onInputChange} />
                                <label className="form-group__label" htmlFor="street">Street</label>
                            </div>
                            <div className="form-group">
                                <input className="form-group__input" type="text" name="area" id="area" size="30" required value={this.state.area} onChange={this.onInputChange} />
                                <label className="form-group__label" htmlFor="area">Area</label>
                            </div>
                            <div className="form-group">
                                <input className="form-group__input" type="text" name="city" id="city" size="30" required value={this.state.city} onChange={this.onInputChange} />
                                <label className="form-group__label" htmlFor="city">City</label>
                            </div>
                            <div className="form-group">
                                <input className="form-group__input" type="text" name="building" id="building" size="30" required value={this.state.building} onChange={this.onInputChange} />
                                <label className="form-group__label" htmlFor="building">House/Building</label>
                            </div>
                            <div className="form-group">
                                <input className="form-group__input" type="text" name="apartment" id="apartment" size="30" required value={this.state.apartment} onChange={this.onInputChange} />
                                <label className="form-group__label" htmlFor="apartment">Apartment/Office</label>
                            </div>
                            <div className="form-group">
                                <input className="form-group__input" type="text" name="floor" id="floor" size="30" required value={this.state.floor} onChange={this.onInputChange} />
                                <label className="form-group__label" htmlFor="floor">Floor</label>
                            </div>
                            <div className="form-group">
                                <input className="form-group__input" type="text" name="instructions" id="instructions" size="30" required value={this.state.instructions} onChange={this.onInputChange} />
                                <label className="form-group__label" htmlFor="instructions">INstructions</label>
                            </div>
                            <div className="form-group">
                                <input className="form-group__input" type="tel" name="mobile" id="mobile" size="30" pattern="[0-9]{6,20}" required value={this.state.mobile} onChange={this.onInputChange} />
                                <label className="form-group__label" htmlFor="mobile">Mobile</label>
                            </div>
                        </div>
                    </div>

                    <div className="delivery-info__address">
                        <button className="delivery-info__add">Add New Address</button>
                        <input type="hidden" name="location" id="location" value={this.state.location} onChange={this.onInputChange} />
                        <span className="delivery-info__locate">
                            <i className="delivery-info__locate-icon material-icons">info</i>Locate your address on the map
                        </span>
                    </div>

                    <div className="delivery-info__time">
                        <h5 className="delivery-info__time-heading">Expected Delivery Time</h5>
                        <div className="expected-delivery-time">
                            <select className="expected-delivery-time__select" name="time" id="time" value={this.state.time} onChange={this.onInputChange}>
                                <option value="Now" className="expected-delivery-time__select-option">Now</option>
                                <option value="30" className="expected-delivery-time__select-option">Today Jan 01 - 01:00 PM</option>
                                <option value="60" className="expected-delivery-time__select-option">Today Jan 01 - 01:15 PM</option>
                                <option value="90" className="expected-delivery-time__select-option">Today Jan 01 - 01:30 PM</option>
                            </select>
                        </div>
                    </div>

                    {/* <button className="">Submit</button> */}
                </form>

            </section>
        );
    }
}

export default DeliveryInfo;