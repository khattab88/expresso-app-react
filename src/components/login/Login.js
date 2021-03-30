import React from 'react';
import { connect } from "react-redux";

import { login } from '../../store/actions';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            rememberMe: false,
            err: null,
        };

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onRememberMeChange = this.onRememberMeChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    onPasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    onRememberMeChange(e) {
        this.setState({ rememberMe: e.target.checked });
    }

    onSubmit(e) {
        e.preventDefault();

        // console.log(`Email:${this.state.email}`);
        // console.log(`Password:${this.state.password}`);
        // console.log(`Remember Me:${this.state.rememberMe}`);

        this.props.login({
            email: this.state.email,
            password: this.state.password
        });
    }

    render() {
        // console.log(this.props.auth);

        return (
            <main className="main login-page__main">

                <div className="login-page__wrapper">

                    <div className="login login-page__login">
                        <div className="login__box">
                            <h3 className="login_heading">Login</h3>

                            <form className="login__form" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input className="form-group__input-text" type="text" name="email" id="email" required="" placeholder="Email" required value={this.state.email} onChange={this.onEmailChange} />
                                </div>
                                <div className="form-group">
                                    <input className="form-group__input-text" type="password" name="password" id="password" required="" placeholder="Password" required value={this.state.password} onChange={this.onPasswordChange} />
                                </div>
                                <div className="login__remember-me">
                                    <input className="form-group__input-checkbox" type="checkbox" name="remember-me" id="remember-me" checked={this.state.rememberMe} onChange={this.onRememberMeChange} />
                                    <label className="login__remember-me-label" htmlFor="remember-me">Remember me</label>
                                </div>
                                <div className="login__submit">
                                    <button type="submit" className="login__sumbit-btn">Login</button>
                                    <p className="login__forget-password">Forgot your password?</p>
                                </div>
                            </form>

                            {(this.props.auth.err &&
                                <p className="login__error-message">
                                    {this.props.auth.err.message}
                                </p>
                            )}

                            {(this.props.auth.isLoggedIn &&
                                <p className="login__success-message">Logged in successfully</p>
                            )}
                        </div>
                    </div>

                    <div className="sign-up login-page__sign-up">
                        <div className="sign-up__box">
                            <h3 className="sign-up__heading">New to Expresso?</h3>
                            <button className="sign-up__btn">
                                <a className="sign-up__link" href="../sign-up/index.html">Sign Up</a>
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state.auth);

    return { auth: state.auth }
}

export default connect(mapStateToProps, { login })(Login);