import React from 'react';

class UserInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.user.name,
            email: this.props.user.email
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(e) {
        const input = e.target;

        const name = input.name;
        const value = input.value;

        // console.log(`{ ${name}: ${value} }`);

        this.setState({ [name]: value });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Name: ${this.state.name}`);
        console.log(`Email: ${this.state.email}`);
    }

    render() {
        return (
            <section className="checkout-info-box user-info">
                <h3 className="user-info__heading-primary">New to Expresso?</h3>
                <p className="user-info__heading-secondary">Please provide your name, email and phone to continue</p>
                <form onSubmit={this.onSubmit}>
                    <div className="user-info__form">
                        <div className="form-group">
                            <input className="form-group__input" type="text" name="name" id="name" size="30" required value={this.state.name} onChange={this.onInputChange} />
                            <label className="form-group__label" htmlFor="customer-name">Name</label>
                        </div>
                        <div className="form-group">
                            <input className="form-group__input" type="text" name="email" id="email" size="30" required value={this.state.email} onChange={this.onInputChange} />
                            <label className="form-group__label" htmlFor="customer-email">Email</label>
                        </div>

                        {/* <button className="">Submit</button> */}
                    </div>
                </form>
            </section>
        );
    }
}

export default UserInfo;