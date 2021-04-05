import React from 'react';
import { connect } from 'react-redux';

import Nav from '../../nav/Nav';
import CheckoutHeader from '../../headers/checkout-header/CheckoutHeader';
import Footer from '../../footer/Footer';

import Checkout from '../../checkout/Checkout';

class CheckoutPage extends React.Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();
    }

    componentDidMount() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {

        if(!Object.keys(this.props.selectedBranch).length) {
            return (
                <div className="container checkout-page" ref={this.ref}>
                    <Nav />
                    <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h1>Sorry, you must login to perform this action!</h1>
                    </div>
                    <Footer />
                </div>
            );
        }

        return (
            <div className="container checkout-page" ref={this.ref} >
                <Nav />
                <CheckoutHeader />
                <Checkout restaurant={this.restaurant} />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { selectedBranch: state.selectedBranch }
}

export default connect(mapStateToProps)(CheckoutPage);