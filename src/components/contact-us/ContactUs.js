import React from 'react';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            subject: 'Suggesion',
            message: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(e) {
        const input = e.target;

        const name = input.name;
        const value = (input.type === "checkbox" || input.type === "radio")
                        ? input.checked
                        : input.value;

        this.setState({ [name]: value });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Name: ${this.state.name}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Subject: ${this.state.subject}`);
        console.log(`Message: ${this.state.message}`);
    }

    render() {
        return (
            <main className="main contact-us-page__main">

                <section className="contact-us">
                    <section className="contact-us__messaging">
                        <h3 className="contact-us__messaging-title-primary">Get in touch with us</h3>
                        <p className="contact-us__messaging-title-secondary">We look forward for improving our applications and
                        providing the best delivery service.</p>
                        <div className="contact-us__form-box">

                            <form className="contact-us__form" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input className="form-control" type="text" name="name" id="name" placeholder="*Name" value={this.state.name} onChange={this.onInputChange} />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" name="email" id="email" placeholder="*Email" value={this.state.email} onChange={this.onInputChange} />
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-control--select" name="subject" id="subject" value={this.state.subject} onChange={this.onInputChange} >
                                        <option value="Suggesion">Suggesion</option>
                                        <option value="Inquiry">Inquiry</option>
                                        <option value="Complaint">Complaint</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control--textarea" name="message" id="" cols="40" rows="5" placeholder="*Message" value={this.state.message} onChange={this.onInputChange}></textarea>
                                </div>

                                <div className="g-recaptcha" data-sitekey="6Lc6auYUAAAAADG4ab_bEdsGGnKcm3mpBffuyZ45">
                                    <div style={{ width: '304px', height: '78px' }}>
                                        <div>
                                            <iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lc6auYUAAAAADG4ab_bEdsGGnKcm3mpBffuyZ45&amp;co=aHR0cDovL2xvY2FsaG9zdDo4MDgw&amp;hl=en&amp;v=pRiAUlKgZOMcFLsfzZTeGtOA&amp;size=normal&amp;cb=x3n92a5axt7r" width="304" height="78" role="presentation" name="a-77d50s4u1eyh" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                                            </div>
                                            <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{ width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none' }}></textarea>
                                        </div>
                                        <iframe style={{ display: 'none' }}></iframe>
                                </div>
                                <button className="contact-us__send">Send</button>
                            </form>

                        </div>
                    </section>

                    <section className="contact-us-info">
                        <div className="contact-us-info__social">
                            <h3 className="contact-us-info__heading-primary">We’re social</h3>
                            <p className="contact-us-info__heading-secondary">Find us on these social networks</p>
                            <ul className="social-networks">
                                <li className="social-networks__item">
                                    <a className="social-networks__link" href="#"><i className="social-networks__icon fa fa-facebook-f"></i></a>
                                </li>
                                <li className="social-networks__item">
                                    <a className="social-networks__link" href="#"><i className="social-networks__icon fa fa-twitter"></i></a>
                                </li>
                                <li className="social-networks__item">
                                    <a className="social-networks__link" href="#"><i className="social-networks__icon fa fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="contact-us-info__phone">
                            <h3 className="contact-us-info__heading-primary">Talk to us</h3>
                            <p className="contact-us-info__heading-secondary">
                                Call us <i className="material-icons">phone_iphone</i>7777777
                            </p>
                        </div>
                    </section>

                </section>

            </main>
        );
    }
}

export default ContactUs;