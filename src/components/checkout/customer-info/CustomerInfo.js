import React from 'react';

import UserInfo from './user-info/UserInfo';
import DeliveryInfo from './delivery-info/DeliveryInfo';
import PaymentInfo from './payment-info/PaymentInfo';

class CustomerInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="customer-info">
    
                <UserInfo user={this.props.customer.user} />
    
                <DeliveryInfo delivery={this.props.customer.delivery} />
    
                <PaymentInfo payment={this.props.customer.payment} />

            </div>
        );
    }
}

export default CustomerInfo;