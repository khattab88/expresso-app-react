import React from 'react';

import Nav from '../../nav/Nav';
import Footer from '../../footer/Footer';

import Signup from '../../signup/Signup';

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container register-page">
                <Nav />
                <Signup />
                <Footer />
            </div>
        );
    }
}

export default SignupPage;