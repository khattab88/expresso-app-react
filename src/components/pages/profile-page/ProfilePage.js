import React from 'react';

import Nav from '../../nav/Nav';
import ProfileHeader from "../../headers/profile-header/ProfileHeader";
import Profile from '../../profile/Profile';
import Footer from '../../footer/Footer';

const ProfilePage = (props) => {
    return (
        <div className="container profile-page">
            <Nav />
            <ProfileHeader />
            <Profile />
            <Footer />
        </div>
    );
}

export default ProfilePage;