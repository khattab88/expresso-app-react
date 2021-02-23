import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="main login-page__main">

                <div className="login-page__wrapper">

                    <div className="login login-page__login">
                        <div className="login__box">
                            <h3 className="login_heading">Login</h3>
                            <form className="login__form" action="#">
                                <div className="form-group">
                                    <input className="form-group__input-text" type="text" name="email" id="email" required="" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input className="form-group__input-text" type="text" name="password" id="password" required="" placeholder="Password" />
                                </div>
                                <div className="login__remember-me">
                                    <input className="form-group__input-checkbox" type="checkbox" name="remember-me" id="remember-me" />
                                    <label className="login__remember-me-label" htmlFor="remember-me">Remember me</label>
                                </div>
                                <div className="login__submit">
                                    <button className="login__sumbit-btn">Login</button>
                                    <p className="login__forget-password">Forgot your password?</p>
                                </div>
                            </form>
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

export default Login;