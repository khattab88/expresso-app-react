import React, { useState, useEffect, useRef } from 'react';

const PasswordInfo = props => {

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const onInputChange = e => {
        const input = e.target;

        const name = input.name;
        const value = input.value;

        switch (name) {
            case 'newPassword':
                setNewPassword(value);
            case 'confirmNewPassword':
                setConfirmNewPassword(value);
            default:
                setCurrentPassword(value);
        }
    }

    const onSubmit = e => {
        e.preventDefault();

        //TODO: update account info
    }

    return (
        <section className="profile-info-box password-info">
            <h3 className="profile-info-box__heading-primary password-info__heading-primary">Change Password</h3>
            <p className="profile-info-box__heading-secondary">Update your login password.</p>

            <form onSubmit={onSubmit}>
                <div className="password-info__form">
                    <div className="form-group">
                        <input className="form-group__input" type="password" name="currentPassword" id="currentPassword" size="30" required
                            value={currentPassword} onChange={onInputChange} />
                        <label className="form-group__label" htmlFor="currentPassword">Current Password</label>
                    </div>
                    <div className="form-group">
                        <input className="form-group__input" type="password" name="newPassword" id="newPassword" size="30" required
                            value={newPassword} onChange={onInputChange} />
                        <label className="form-group__label" htmlFor="newPassword">New Password</label>
                    </div>
                    <div className="form-group">
                        <input className="form-group__input" type="password" name="confirmNewPassword" id="confirmNewPassword" size="30" required
                            value={confirmNewPassword} onChange={onInputChange} />
                        <label className="form-group__label" htmlFor="confirmNewPassword">Confirm New Password</label>
                    </div>
                </div>
                <button className="form-group__submit password-info__update">Update Password</button>
            </form>

        </section>
    );
}

export default PasswordInfo;