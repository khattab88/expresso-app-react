import React from 'react';

class UserInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.userInfo.name,
            email: this.props.userInfo.email
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(e) {
        const input = e.target;

        const name = input.name;
        const value = input.value;

        this.setState({ [name]: value });

        this.props.updateUserInfo({
            name: this.state.name,
            email: this.state.email
        });
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.updateUserInfo({
            name: this.state.name,
            email: this.state.email
        });
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

                        {/* <button>Submit</button> */}
                    </div>
                </form>
            </section>
        );
    }
}

export default UserInfo;