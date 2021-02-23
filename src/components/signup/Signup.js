import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="main register-page__main">

                <div className="register-page__wrapper">

                    <div className="sign-in register-page__sign-in">
                        <h3 className="sign-in__heading">Have an Account?</h3>
                        <button className="sign-in__btn">
                            <a className="sign-in__link" href="../login/index.html">Login</a>
                        </button>
                    </div>

                    <div className="register register-page__register">
                        <h3 className="register__heading">New to Expresso?</h3>
                        
                        <form className="register__form" action="#">
                            <div className="form-group">
                                <input className="form-group__input-text" type="text" name="" id="" placeholder="First Name" required="" />
                            </div>
                            <div className="form-group">
                                <input className="form-group__input-text" type="text" name="" id="" placeholder="Last Name" required="" />
                            </div>
                            <div className="form-group form-group--email">
                                <input className="form-group__input-text" type="email" name="" id="" placeholder="Email" required="" />
                            </div>
                            <div className="form-group">
                                <input className="form-group__input-text" type="password" name="" id="" placeholder="Password" required="" />
                            </div>
                            <div className="form-group">
                                <input className="form-group__input-text" type="password" name="" id="" placeholder="Confirm Password" required="" />
                            </div>
                            <div className="form-group form-group--country">
                                <select className="form-group__select">
                                    <option value="Egypt">Egypt</option>
                                    <option value="UAE">UAE</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Bahrain">Bahrain</option>
                                </select>
                            </div>
                        </form>

                        <button className="register__btn">Register</button>

                    </div>
                </div>
            </main>
        );
    }
}

export default Signup;