import SocialLink from './social-link/SocialLink';
import AppDownloadButton from './app-download-button/AppDownloadButton';

function Footer() {

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
                        <li className="secondary-navigation__item"><a href="#" className="secondary-navigation__link">About Us</a></li>
                        <li className="secondary-navigation__item"><a href="#" className="secondary-navigation__link">How it works</a></li>
                        <li className="secondary-navigation__item"><a href="../restaurant-list/index.html" className="secondary-navigation__link">Restaurants</a></li>
                        <li className="secondary-navigation__item"><a href="../contact-us/index.html" className="secondary-navigation__link">Contact Us</a></li>
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
                    <button className="change-country__btn">
                        <img className="change-country__flag"
                            src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/eg.svg" alt="egypt" height="20" width="30" />
                        Egypt
                        <i className="change-country__caret--down fa fa-caret-down"></i>
                    </button>
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