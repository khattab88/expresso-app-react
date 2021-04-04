import React from 'react';

import AccountInfo from './account-info/AccountInfo';
import DeliveryInfo from './delivery-info/DeliveryInfo';
import PasswordInfo from './password-info/PasswordInfo';

const Profile = (props) => {
    return (
        <main className="main profile-page__main">

            <div className="profile">
                <AccountInfo />

                <DeliveryInfo />

                <PasswordInfo />
            </div>

        </main>
    );
}

export default Profile;