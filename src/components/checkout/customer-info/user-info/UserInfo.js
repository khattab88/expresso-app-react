import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

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

    renderAnonymousView() {
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

    renderLoggedInView() {
        return(
            <section className="checkout-info-box user-info">
                <h3 className="user-info__heading-primary">{`Hello, ${this.props.auth.user.firstName} ${this.props.auth.user.lastName}`}</h3>
                <p className="user-info__heading-secondary">{this.props.auth.user.email}</p>

                <ul className="profile-control">
                    <li className="profile-control__item">
                        <Link className="profile-control__btn profile-control__btn--branded" to="/profile">Edit Profile</Link>
                    </li>
                    <li>
                        <Link to="/logout" className="profile-control__btn">Logout</Link>
                    </li>
                </ul>
            </section>
        );
    }

    render() {
        return (this.props.auth.isLoggedIn)
                    ? this.renderLoggedInView()
                    : this.renderAnonymousView();
    }
}

const mapStateToProps = state => {
    console.log(state.auth);

    return { auth: state.auth }
}

export default connect(mapStateToProps)(UserInfo);