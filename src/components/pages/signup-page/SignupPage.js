import React from 'react';

import Nav from '../../nav/Nav';
import Footer from '../../footer/Footer';

import Signup from '../../signup/Signup';

class SignupPage extends React.Component {
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
            <div className="container register-page" ref={this.ref} >
                <Nav />
                <Signup />
                <Footer />
            </div>
        );
    }
}

export default SignupPage;