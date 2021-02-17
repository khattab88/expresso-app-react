function Footer() {
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
                        <li className="social-navigation__item">
                            <a href="#" className="social-link">
                                <i className="social-link__icon fa fa-facebook-square"></i>
                            </a>
                        </li>
                        <li className="social-navigation__item">
                            <a href="#" className="social-link"><i className="social-link__icon fa fa-twitter"></i></a>
                        </li>
                        <li className="social-navigation__item">
                            <a href="#" className="social-link"><i className="social-link__icon fa fa-instagram"></i></a>
                        </li>
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
                    <a href="#" className="app-download__btn">
                        <img alt="Download App from Google Playstore" className="app-download__img"
                            src="https://trycarriage.global.ssl.fastly.net/assets/v2/playstore_icon-b9ca6f7b9f6d29531733dab0586cd3ab.svg" />
                    </a>
                    <a href="#" className="app-download__btn">
                        <img alt="Download App from Apple App Store" className="app-download__img"
                            src="https://trycarriage.global.ssl.fastly.net/assets/v2/appstore_icon-71d0475940474ee2ba3be457483be01b.svg" />
                    </a>
                </div>
            </section>
    
            <section className="copyright">© 2019 Expresso App. All rights reserved.</section>
        </footer>
    );
}

export default Footer;