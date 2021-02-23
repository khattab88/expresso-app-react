import React from 'react';

class ContactUsHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header contact-us-page__header">
                <section className="header__breadcrumb">
                    <ul className="header__breadcrumb-list">
                        <li className="header__breadcrumb-item">
                            <a className="header__breadcrumb-link header__breadcrumb-link--home" href="../home/index.html">Home</a>
                        </li>
                        <li className="header__breadcrumb-item">
                            <a className="header__breadcrumb-link header__breadcrumb-link--current" href="#">Contact Us</a>
                        </li>
                    </ul>
                </section>
                <div className="header__msg">
                    <h1 className="header__msg-primary">Questions, suggestions?</h1>
                    <h2 className="header__msg-secondary">Tell us about it!</h2>
                </div>
            </header>
        );
    }
}

export default ContactUsHeader;