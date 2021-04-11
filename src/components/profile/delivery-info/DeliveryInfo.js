import React, { useState, useEffect } from 'react';

import AddressList from '../../address-list/AddressList';
import AddressModal from '../../modals/address-modal/AddressModal';

const DeliveryInfo = props => {

    const [isMapModalOpen, setIsMapModalOpen] = useState(false);
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

    const toggleAddressModal = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        setIsAddressModalOpen(!isAddressModalOpen);
    }

    return (
        <section className="profile-info-box delivery-info">
            <h3 className="profile-info-box__heading-primary delivery-info__heading-primary">Your Addresses</h3>
            <p className="profile-info-box__heading-secondary">Your previously saved addresses.</p>

            <div className="delivery-info__addresses">
                <AddressList />
            </div>

            <button className="form-group__submit delivery-info__add" onClick={toggleAddressModal}>Add New</button>

            {/* <MapModal /> */}
            <AddressModal isOpen={isAddressModalOpen} toggle={toggleAddressModal} />
        </section>
    );
}

export default DeliveryInfo;