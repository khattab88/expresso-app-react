import React, { useState, useEffect } from 'react';

import AddressModal from '../../modals/address-modal/AddressModal';

const DeliveryInfo = props => {

    const [isMapModalOpen, setIsMapModalOpen] = useState(false);
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

    const toggleAddressModal = () => {
        setIsAddressModalOpen(!isAddressModalOpen);
    }

    return (
        <section className="profile-info-box delivery-info">
            <h3 className="profile-info-box__heading-primary delivery-info__heading-primary">Your Addresses</h3>
            <p className="profile-info-box__heading-secondary">Your previously saved addresses.</p>
            <button className="form-group__submit delivery-info__add" onClick={toggleAddressModal}>Add New</button>

            {/* <MapModal /> */}
            <AddressModal isOpen={isAddressModalOpen} toggle={toggleAddressModal} />
        </section>
    );
}

export default DeliveryInfo;