import React from 'react';

import AddressForm from './address-form/AddressForm';

const AddressModal = (props) => {

    const onAddressEditComplete = () => {
        props.toggle();
    }

    return (
        <div className={(props.isOpen) ? "address-modal address-modal--open" : "address-modal"}>
            <div className="address-modal__content">
                <div className="address-modal__header">
                    <div className="address-modal__title">Add New Address</div>
                    <p className="address-modal__close" onClick={props.toggle}>
                        <span className="address-modal__close-icon material-icons">clear</span>
                    </p>
                </div>
                <div className="address-modal__body">
                    <AddressForm onAddressEditComplete={onAddressEditComplete} />
                </div>
            </div>
        </div>
    );
}

export default AddressModal;