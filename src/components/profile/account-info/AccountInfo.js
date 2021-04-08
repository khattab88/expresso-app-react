import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { updateProfile } from '../../../store/actions';

const AccountInfo = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [country, setCountry] = useState("Egypt");

    useEffect(() => {
        setFirstName(props.user.firstName);
        setLastName(props.user.lastName);
        setMobile(props.user.mobile || "");
        if(props.user.birthDate) {
            setBirthDate(props.user.birthDate.split("T")[0]);
        } else {
            setBirthDate("");
        }
        
        setCountry("Egypt");
    }, []);

    const onInputChange = e => {
        const input = e.target;

        const name = input.name;
        const value = input.value;

        // console.log(`${name}: ${value}`);

        switch (name) {
            case 'firstName':
                setFirstName(value);
            case 'lastName':
                setLastName(value);
            case 'mobile':
                setMobile(value);
            case 'birthDate':
                setBirthDate(value);
            default:
                setCountry(value);
        }
    }

    const onSubmit = e => {
        e.preventDefault();

        //TODO: update account info
        props.updateProfile({
            firstName,
            lastName,
            mobile,
            birthDate
        });
    }

    return (
        <section className="profile-info-box account-info">
            <h3 className="profile-info-box__heading-primary">Account Details</h3>
            <p className="profile-info-box__heading-secondary">Update your personal information and contact details.</p>
            <form onSubmit={onSubmit}>
                <div className="account-info__form">
                    <div className="form-group">
                        <input className="form-group__input" type="text" name="firstName" id="firstName" size="30" required
                            value={firstName} onChange={onInputChange} />
                        <label className="form-group__label" htmlFor="firstName">First Name</label>
                    </div>
                    <div className="form-group">
                        <input className="form-group__input" type="text" name="lastName" id="lastName" size="30" required 
                            value={lastName} onChange={onInputChange} />
                        <label className="form-group__label" htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="form-group">
                        <input className="form-group__input" type="tel" name="mobile" id="mobile" size="30" 
                            value={mobile} onChange={onInputChange} />
                        <label className="form-group__label" htmlFor="mobile">Mobile</label>
                    </div>
                    <div className="form-group">
                        <input className="form-group__input" type="date" name="birthDate" id="birthDate" size="30" 
                            value={birthDate} onChange={onInputChange} />
                        <label className="form-group__label" htmlFor="birthDate">Birth Date</label>
                    </div>
                    <div className="form-group">
                        <select className="form-group__input" name="country" id="country" required 
                            value={country} onChange={onInputChange} >
                            <option value="Egypt">Egypt</option>
                            <option value="UAE">UAE</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Kuwait">Kuwait</option>
                        </select>
                        <label className="form-group__label" htmlFor="country">Country</label>
                    </div>
                </div>
                <button className="form-group__submit" style={{ cursor: 'pointer' }}>Update</button>
            </form>
        </section>
    );
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        token: state.auth.token
    }
}

export default connect(mapStateToProps, { updateProfile })(AccountInfo);