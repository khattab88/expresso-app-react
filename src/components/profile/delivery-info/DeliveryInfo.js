import React from 'react';

const DeliveryInfo = props => {
    return (
        <section className="profile-info-box delivery-info">
            <h3 className="profile-info-box__heading-primary delivery-info__heading-primary">Your Addresses</h3>
            <p className="profile-info-box__heading-secondary">Your previously saved addresses.</p>
            <button className="form-group__submit delivery-info__add">Add New</button>

            {/* <MapModal /> */}
        </section>
    );
}

export default DeliveryInfo;