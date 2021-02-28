import React from 'react';

import NavToggle from './nav-toggle/NavToggle';
import NavLogo from './nav-logo/NavLogo';
import NavItem from './nav-item/NavItem';
import NavLink from './nav-link/NavLink';
import CountryBtn from './country-button/CountryButton';
import CartButton from './cart-button/CartButton';
import CategoryButton from './category-button/CategoryButton';

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMobileNavOpen: false,
        };

        this.toggleMobileNav = this.toggleMobileNav.bind(this);

        this.navItems = {
            login: { title: "Login", href:"../login/index.html" },
            signUp: { title: "Sign Up", href:"../sign-up/index.html" },
            contactUs: { title: "Contact Us", href:"../contact-us/index.html" },
            lang: { title: "العربية", href:"#"},
            country: { title: "", href:"#"},
            cart: { title: "", href:"../checkout/index.html"},
            category: { title: "", href:"#"}
        };
    }

    componentDidMount() {}

    toggleMobileNav(e) {
        this.setState({
            isMobileNavOpen: !this.state.isMobileNavOpen
        });
    }

    render() {
        return (
            <nav className="navbar">
                <NavLogo />
    
                <div className="navigation">
                    <ul className={`${this.state.isMobileNavOpen ?'navigation__items navigation__items--mobile-open' :'navigation__items'}`}>
                        <NavItem>
                            <NavLink href={this.navItems.login.href}>
                                {this.navItems.login.title}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={this.navItems.signUp.href}>
                                {this.navItems.signUp.title}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={this.navItems.contactUs.href}>
                                {this.navItems.contactUs.title}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={this.navItems.lang.href}>
                                {this.navItems.lang.title}
                            </NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <CountryBtn />
                        </NavItem>
                        
                        <NavItem>
                            <NavLink href={this.navItems.cart.href}>
                                <CartButton />
                            </NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <CategoryButton />
                        </NavItem>
                    </ul>
                </div>
    
                <NavToggle toggleMobileNav={this.toggleMobileNav} />
            </nav>
        );
    }
}

export default Nav;