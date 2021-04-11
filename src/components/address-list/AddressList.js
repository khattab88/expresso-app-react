import React from 'react';

import Address from './address/Address';

const AddressList = props => {

    const addresses = [
        {
            id: "1",
            name: "97 omar ibn el khattab - Heliopolis",
            area: "Heliopolis",
            street: "omar ibn el khattab",
            building: "97",
            floor: "5",
            apartment: "8",
            mobile: "0123456789",
            instructions: "near tivoli dom"
        },
        {
            id: "2",
            name: "26 ahmed heshmat - Zamalek",
            area: "Zamalek",
            street: "ahmed heshmat",
            building: "26",
            floor: "3",
            apartment: "5",
            mobile: "0123456789",
            instructions: "near chinese embassy"
        }
    ];

    return (
        <section className="address-list">
            { addresses.map(address => <Address address={address} key={address.id} />)}
        </section>
    );
}

export default AddressList;