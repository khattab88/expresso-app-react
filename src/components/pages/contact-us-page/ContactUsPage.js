import React from 'react';

import Nav from '../../nav/Nav';
import ContactUsHeader from '../../headers/contact-us-header/ContactUsHeader';
import Footer from '../../footer/Footer';

import ContactUs from '../../contact-us/ContactUs';

class ContactUsPage extends React.Component {
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
        return (
            <div className="container contact-us-page" ref={this.ref} >
                <Nav />
                <ContactUsHeader />
                <ContactUs />
                <Footer />
            </div>
        );
    }
}

export default ContactUsPage;