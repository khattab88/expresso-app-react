function Nav() {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="./index.html" className="logo__link">
                    <h2 className="logo__title">Expresso</h2>
                </a>
            </div>
            <div className="navigation">
                <ul className="navigation__items">
                    <li className="navigation__item"><a href="../login/index.html" className="navigation__link">Login</a></li>
                    <li className="navigation__item"><a href="../sign-up/index.html" className="navigation__link">Sign Up</a>
                    </li>
                    <li className="navigation__item"><a href="../contact-us/index.html" className="navigation__link">Contact Us</a></li>
                    <li className="navigation__item nav-language"><a href="#" className="navigation__link">العربية</a></li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            <div className="country-btn">
                                <img className="country-btn__img"
                                    src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/eg.svg" 
                                    alt="egypt" height="20" width="30" />
                                    <i className="country-btn__caret--down fa fa-caret-down"></i>
                            </div>
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a href="../checkout/index.html" className="navigation__link">
                            <div className="cart-btn">
                                <img alt="Cart" height="27" className="cart-btn__img"
                                    src="https://trycarriage.global.ssl.fastly.net/assets/v2/shopping_cart_icon_white-9c4c2230af01610868ccb639a00b01bb.svg"
                                    title="Cart" width="30" />
                                    <em className="cart-btn__item-count">1</em>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="navbar__toggle">
                <span className="navbar__toggle-icon fa fa-align-justify"></span>
            </div>
        </nav>
    );
}

export default Nav;