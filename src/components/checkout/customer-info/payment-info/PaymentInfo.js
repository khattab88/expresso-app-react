import React from 'react';

class PaymentInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            method: this.props.paymentInfo.method,
            agreed: this.props.paymentInfo.agreed,
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange  = this.onInputChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        //console.log(`Method: ${this.state.method}`);
        //console.log(`Agreed: ${this.state.agreed}`);

        this.props.updatePaymentInfo(this.state);
    }

    onInputChange(e) {
        const input = e.target;
        const name = input.name;
        let value = null;

        if(name === "agreed") { 
            // console.log(input.checked);
            value = input.checked; 
            this.setState({ [name]: value });
        } 

        if(name == "method") {
            value = input.value; 
            this.setState({ [name]: value });
        }

        // console.log(this.state);

        // this.props.updatePaymentInfo(this.state);
    }

    render() {

        return (
            <section className="checkout-info-box payment-info">

                <form onSubmit={this.onSubmit}>
                    <h4 className="payment-info__heading">Payment Methods</h4>
                    <ul className="payment-info__options">
                        <li className="payment-info__option">
                            <input className="payment-info__option-input" type="radio" name="method" id="cash" checked={this.state.method === "cash"} value="cash" onChange={this.onInputChange} />
                            <label className="payment-info__option-label" htmlFor="cash">
                                <span className="payment-info__option-icon payment-info__option-icon--cash"></span>
                                <h5 className="payment-info__option-name">Cash on Delivery</h5>
                            </label>
                        </li>
                        <li className="payment-info__option">
                            <input className="payment-info__option-input" type="radio" name="method" id="card" checked={this.state.method === "card"} value="card" onChange={this.onInputChange} />
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