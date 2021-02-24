function CustomerInfo(props) {
    return (
        <div className="customer-info">

            <section className="checkout-info-box user-info">
                <h3 className="user-info__heading-primary">New to Expresso?</h3>
                <p className="user-info__heading-secondary">Please provide your name, email and phone to continue</p>
                <div className="user-info__form">
                    <div className="form-group">
                        <input className="form-group__input" type="text" name="customer-name" id="customer-name" size="30" required="" />
                        <label className="form-group__label" htmlFor="customer-name">Name</label>
                    </div>
                    <div className="form-group">
                        <input className="form-group__input" type="text" name="customer-email" id="customer-email" size="30" required="" />
                        <label className="form-group__label" htmlFor="customer-email">Email</label>
                    </div>
                </div>
            </section>

            <section className="checkout-info-box delivery-info">
                <h4 className="delivery-info__heading">Delivery Details</h4>
                <div className="delivery-info__form">
                    <h5 className="delivery-info__form-title">
                        Add new - <span className="delivery-info__form-address">Heliopolis, Cairo</span>
                    </h5>
                    <div className="delivery-info__form-fields">
                        <div className="form-group">
                            <input className="form-group__input" type="text" name="address-name" id="address-name" size="30" required="" />
                            <label className="form-group__label" htmlFor="address-name">Address</label>
                        </div>
                        <div className="form-group">
                            <input className="form-group__input" type="text" name="address-street" id="address-street" size="30" required="" />
                            <label className="form-group__label" htmlFor="address-street">Street</label>
                        </div>
                        <div className="form-group">
                            <input className="form-group__input" type="text" name="address-area" id="address-area" size="30" required="" />
                            <label className="form-group__label" htmlFor="address-area">Area</label>
                        </div>
                        <div className="form-group">
                            <input className="form-group__input" type="text" name="address-city" id="address-city" size="30" required="" />
                            <label className="form-group__label" htmlFor="address-city">City</label>
                        </div>
                        <div className="form-group">
                            <input className="form-group__input" type="text" name="address-building" id="address-building" size="30" required="" />
                            <label className="form-group__label" htmlFor="address-building">House/Building</label>
                        </div>
                        <div className="form-group">
                            <input className="form-group__input" type="text" name="address-apartment" id="address-apartment" size="30" required="" />
                            <label className="form-group__label" htmlFor="address-apartment">Apartment/Office</label>
                        </div>
                        <div className="form-group">
                            <input className="form-group__input" type="text" name="address-floor" id="address-floor" size="30" required="" />
                            <label className="form-group__label" htmlFor="address-floor">Floor</label>
                        </div>
                        <div className="form-group">
                            <input className="form-group__input" type="text" name="address-instructions" id="address-instructions" size="30" required="" />
                            <label className="form-group__label" htmlFor="address-instructions">INstructions</label>
                        </div>
                        <div className="form-group">
                            <input className="form-group__input" type="tel" name="address-mobile" id="address-mobile" size="30" required="" pattern="[0-9]{6,20}" />
                            <label className="form-group__label" htmlFor="address-mobile">Mobile</label>
                        </div>
                    </div>
                </div>

                <div className="delivery-info__address">
                    <button className="delivery-info__add">Add New Address</button>
                    <span className="delivery-info__locate">
                        <i className="delivery-info__locate-icon material-icons">info</i>Locate your address on the map
                                </span>
                </div>

                <div className="delivery-info__time">
                    <h5 className="delivery-info__time-heading">Expected Delivery Time</h5>
                    <div className="expected-delivery-time">
                        <select className="expected-delivery-time__select">
                            <option value="Now" className="expected-delivery-time__select-option">Now</option>
                            <option value="Now" className="expected-delivery-time__select-option">Today Jan 01 - 01:00 PM</option>
                            <option value="Now" className="expected-delivery-time__select-option">Today Jan 01 - 01:15 PM</option>
                            <option value="Now" className="expected-delivery-time__select-option">Today Jan 01 - 01:30 PM</option>
                        </select>
                    </div>
                </div>

            </section>

            <section className="checkout-info-box payment-info">
                <h4 className="payment-info__heading">Payment Methods</h4>
                <ul className="payment-info__options">
                    <li className="payment-info__option">
                        <input className="payment-info__option-input" type="radio" defaultChecked name="payment" id="cash_pay" />
                        <label className="payment-info__option-label" htmlFor="cash_pay">
                            <span className="payment-info__option-icon payment-info__option-icon--cash"></span>
                            <h5 className="payment-info__option-name">Cash on Delivery</h5>
                        </label>
                    </li>
                    <li className="payment-info__option">
                        <input className="payment-info__option-input" type="radio" name="payment" id="card_pay" />
                        <label className="payment-info__option-label" htmlFor="card_pay">
                            <span className="payment-info__option-icon payment-info__option-icon--credit"></span>
                            <h5 className="payment-info__option-name">Credit Card</h5>
                        </label>
                    </li>
                </ul>

                <div className="disclaimer disclaimer--payment">
                    <div className="disclaimer__text">
                        *To enable credit card option, Please Agree to terms &amp; conditions.
                            </div>
                    <div className="disclaimer__text">
                        <input type="checkbox" name="disclaimer-payment" id="disclaimer-payment" />
                        <label htmlFor="disclaimer-payment" className="disclaimer__link">TERMS AND CONDITIONS OF USE.</label>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CustomerInfo;