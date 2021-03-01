import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            country: 'Egypt'
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`First Name: ${this.state.firstName}`);
        console.log(`Last Name: ${this.state.lastName}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Password: ${this.state.password}`);
        console.log(`Confirm Password: ${this.state.confirmPassword}`);
        console.log(`Country: ${this.state.country}`);
    }

    onInputChange(e) {
        const input = e.target;

        const name = input.name;
        const value = (input.type === "checkbox" || input.type === "radio")
                        ? input.checked
                        : input.value;

        this.setState({ [name]: value });
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
                        
                        <form className="register__form" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input className="form-group__input-text" type="text" name="firstName" id="firstName" placeholder="First Name" required value={this.state.firstName} onChange={this.onInputChange} />
                            </div>
                            <div className="form-group">
                                <input className="form-group__input-text" type="text" name="lastName" id="lastName" placeholder="Last Name" required value={this.state.lastName} onChange={this.onInputChange} />
                            </div>
                            <div className="form-group form-group--email">
                                <input className="form-group__input-text" type="email" name="email" id="email" placeholder="Email" required value={this.state.email} onChange={this.onInputChange} />
                            </div>
                            <div className="form-group">
                                <input className="form-group__input-text" type="password" name="password" id="password" placeholder="Password" required value={this.state.password} onChange={this.onInputChange} />
                            </div>
                            <div className="form-group">
                                <input className="form-group__input-text" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" required value={this.state.confirmPassword} onChange={this.onInputChange} />
                            </div>
                            <div className="form-group form-group--country">
                                <select className="form-group__select" name="country" id="country" value={this.state.country} onChange={this.onInputChange}>
                                    <option value="Egypt">Egypt</option>
                                    <option value="UAE">UAE</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Bahrain">Bahrain</option>
                                </select>
                            </div>

                            <button className="register__btn">Register</button>
                        </form>

                    </div>
                </div>
            </main>
        );
    }
}

export default Signup;