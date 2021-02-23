import React from 'react';

import Nav from '../../nav/Nav';
import Footer from '../../footer/Footer';

import Login from '../../login/Login';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container login-page">
                <Nav />
                <Login />
                <Footer />
            </div>
        );
    }
}

export default LoginPage;