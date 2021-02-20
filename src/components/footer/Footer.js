import SecondaryNavItem from './secondary-nav-item/SecondaryNavItem';
import SocialLink from './social-link/SocialLink';
import AppDownloadButton from './app-download-button/AppDownloadButton';
import ChangeCountry from './change-country/ChangeCountry';

function Footer() {

    const navItems = {
        aboutUs: { title: 'About Us', href: '#'},
        howItWorks: { title: 'How it works', href: '#'},
        restaurants: { title: 'Restaurants', href: '../restaurant-list/index.html'},
        contactUs: { title: 'Contact Us', href: '../contact-us/index.html'},
    };

    const socialLinks = {
        facebook: { href: '#', icon: 'fa-facebook-square'},
        twitter: { href: '#', icon: 'fa-twitter'},
        instagram: { href: '#', icon: 'fa-instagram'},
    };

    const appDownloads = {
        ios: { title: 'Download App from Apple App Store', href: '#', img: '/assets/img/icons/app-stores/appstore_icon.svg' },
        android: { title: 'Download App from Apple App Store', href: '#', img: '/assets/img/icons/app-stores/playstore_icon.svg' }
    };

    return(
        <footer className="footer">
            <h2 className="footer__logo">Expresso</h2>

            <section className="footer__links">
                <div className="secondary-navigation">
                    <ul className="secondary-navigation__items">
                        <SecondaryNavItem href={navItems.aboutUs.href} title={navItems.aboutUs.title} />
                        <SecondaryNavItem href={navItems.howItWorks.href} title={navItems.howItWorks.title} />
                        <SecondaryNavItem href={navItems.restaurants.href} title={navItems.restaurants.title} />
                        <SecondaryNavItem href={navItems.contactUs.href} title={navItems.contactUs.title} />
                    </ul>
                </div>
                <div className="social-navigation">
                    <ul className="social-navigation__items">
                        <SocialLink href={socialLinks.facebook.href} icon={socialLinks.facebook.icon} />
                        <SocialLink href={socialLinks.twitter.href} icon={socialLinks.twitter.icon} />
                        <SocialLink href={socialLinks.instagram.href} icon={socialLinks.instagram.icon} />
                    </ul>
                </div>
            </section>

            <section className="sub-footer">
                <div className="change-country">
                    <ChangeCountry />
                </div>
                <div className="app-download">
                    <AppDownloadButton 
                        title={appDownloads.android.title} 
                        href={appDownloads.android.href} 
                        img={appDownloads.android.img} />
                    <AppDownloadButton 
                        title={appDownloads.ios.title} 
                        href={appDownloads.ios.href} 
                        img={appDownloads.ios.img} />
                </div>
            </section>
    
            <section className="copyright">© 2019 Expresso App. All rights reserved.</section>
        </footer>
    );
}

export default Footer;