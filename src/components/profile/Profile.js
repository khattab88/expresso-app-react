import React from 'react';

import AccountInfo from './account-info/AccountInfo';

const Profile = (props) => {
    return (
        <main className="main profile-page__main">

            <div className="profile">
                <AccountInfo />

                <section className="profile-info-box delivery-info">
                    <h2>Delivery Info</h2>
                </section>

                <section className="profile-info-box password-info">
                    <h2>Password Info</h2>
                </section>
            </div>

        </main>
    );
}

export default Profile;