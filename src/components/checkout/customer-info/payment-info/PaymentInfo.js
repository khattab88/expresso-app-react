import React from 'react';

class PaymentInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            method: this.props.payment.method,
            agreed: this.props.payment.agreed,
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange  = this.onInputChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Method: ${this.state.method}`);
        console.log(`Agreed: ${this.state.agreed}`);
    }

    onInputChange(e) {
        const input = e.target;

        const name = input.name;
        let value = input.value;
        if(input.type === "radio") value = input.value;
        if(input.type === "checkbox") value = input.checked;

        // console.log(`${[name]}: ${value}`);

        this.setState({ [name]: value });
    }

    render() {

        return (
            <section className="checkout-info-box payment-info">

                <form onSubmit={this.onSubmit}>
                    <h4 className="payment-info__heading">Payment Methods</h4>
                    <ul className="payment-info__options">
                        <li className="payment-info__option">
                            <input className="payment-info__option-input" type="radio" name="payment" id="cash" defaultChecked value="cash" onChange={this.onInputChange} />
                            <label className="payment-info__option-label" htmlFor="cash">
                                <span className="payment-info__option-icon payment-info__option-icon--cash"></span>
                                <h5 className="payment-info__option-name">Cash on Delivery</h5>
                            </label>
                        </li>
                        <li className="payment-info__option">
                            <input className="payment-info__option-input" type="radio" name="payment" id="card" value="card" onChange={this.onInputChange} />
                            <label className="payment-info__option-label" htmlFor="card">
                                <span className="payment-info__option-icon payment-info__option-icon--credit"></span>
                                <h5 className="payment-info__option-name">Credit Card</h5>
                            </label>
                        </li>
                    </ul>

                    <div className="disclaimer disclaimer--payment">
                        <div className="disclaimer__text">
                            *To enable credit card option, Please Agree to terms &amp; conditions.
                    </div>
                        <div className="disclaimer__text">
                            <input type="checkbox" name="agreed" id="agreed" onChange={this.onInputChange} />
                            <label htmlFor="agreed" className="disclaimer__link">TERMS AND CONDITIONS OF USE.</label>
                        </div>
                    </div>

                    {/* <button>Submit</button> */}
                </form>

            </section>
        );
    }
}

export default PaymentInfo;