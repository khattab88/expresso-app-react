import React from 'react';
import { connect } from 'react-redux';

import Address from './address/Address';

const AddressList = props => {

    return (
        <section className="address-list">
            { props.addresses.map(item => 
                <Address id={item.id} key={item.id} 
                         address={item.address} coordinates={item.coordinates} />
            )}
        </section>
    );
}

const mapStateToProps = state => {
    return { addresses: state.addresses }
}

export default connect(mapStateToProps)(AddressList);