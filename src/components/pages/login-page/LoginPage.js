import React from 'react';

import Nav from '../../nav/Nav';
import Footer from '../../footer/Footer';

import Login from '../../login/Login';

class LoginPage extends React.Component {
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
            <div className="container login-page" ref={this.ref} >
                <Nav />
                <Login />
                <Footer />
            </div>
        );
    }
}

export default LoginPage;