import React from 'react';

import SecondaryNavItem from './secondary-nav-item/SecondaryNavItem';
import SocialLink from './social-link/SocialLink';
import AppDownloadButton from './app-download-button/AppDownloadButton';
import ChangeCountry from './change-country/ChangeCountry';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.navItems = {
            aboutUs: { title: 'About Us', href: '#' },
            howItWorks: { title: 'How it works', href: '#' },
            restaurants: { title: 'Restaurants', href: '/restaurant-list' },
            contactUs: { title: 'Contact Us', href: '/contact-us' },
        };

        this.socialLinks = {
            facebook: { href: '#', icon: 'fa-facebook-square' },
            twitter: { href: '#', icon: 'fa-twitter' },
            instagram: { href: '#', icon: 'fa-instagram' },
        };

        this.appDownloads = {
            ios: { title: 'Download App from Apple App Store', href: '#', img: '/assets/img/icons/app-stores/appstore_icon.svg' },
            android: { title: 'Download App from Apple App Store', href: '#', img: '/assets/img/icons/app-stores/playstore_icon.svg' }
        };
    }

    render() {
        return (
            <footer className="footer">
                <h2 className="footer__logo">Expresso</h2>

                <section className="footer__links">
                    <div className="secondary-navigation">
                        <ul className="secondary-navigation__items">
                            <SecondaryNavItem href={this.navItems.aboutUs.href} title={this.navItems.aboutUs.title} />
                            <SecondaryNavItem href={this.navItems.howItWorks.href} title={this.navItems.howItWorks.title} />
                            <SecondaryNavItem href={this.navItems.restaurants.href} title={this.navItems.restaurants.title} />
                            <SecondaryNavItem href={this.navItems.contactUs.href} title={this.navItems.contactUs.title} />
                        </ul>
                    </div>
                    <div className="social-navigation">
                        <ul className="social-navigation__items">
                            <SocialLink href={this.socialLinks.facebook.href} icon={this.socialLinks.facebook.icon} />
                            <SocialLink href={this.socialLinks.twitter.href} icon={this.socialLinks.twitter.icon} />
                            <SocialLink href={this.socialLinks.instagram.href} icon={this.socialLinks.instagram.icon} />
                        </ul>
                    </div>
                </section>

                <section className="sub-footer">
                    <div className="change-country">
                        <ChangeCountry />
                    </div>
                    <div className="app-download">
                        <AppDownloadButton
                            title={this.appDownloads.android.title}
                            href={this.appDownloads.android.href}
                            img={this.appDownloads.android.img} />
                        <AppDownloadButton
                            title={this.appDownloads.ios.title}
                            href={this.appDownloads.ios.href}
                            img={this.appDownloads.ios.img} />
                    </div>
                </section>

                <section className="copyright">{`© ${new Date().getFullYear()} Expresso App. All rights reserved.`}</section>
            </footer>
        );
    }
}

export default Footer;