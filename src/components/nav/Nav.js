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

        this.state.navItems = {
            login: { title: "Login", href:"/login" },
            signUp: { title: "Sign Up", href:"/signup" },
            contactUs: { title: "Contact Us", href:"/contact-us" },
            lang: { title: "العربية", href:"#"},
            country: { title: "", href:"#"},
            cart: { title: "", href:"/checkout"},
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
                            <NavLink href={this.state.navItems.login.href}>
                                {this.state.navItems.login.title}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={this.state.navItems.signUp.href}>
                                {this.state.navItems.signUp.title}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={this.state.navItems.contactUs.href}>
                                {this.state.navItems.contactUs.title}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={this.state.navItems.lang.href}>
                                {this.state.navItems.lang.title}
                            </NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <CountryBtn />
                        </NavItem>
                        
                        <NavItem>
                            <NavLink href={this.state.navItems.cart.href}>
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