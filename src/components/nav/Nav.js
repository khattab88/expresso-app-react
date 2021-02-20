import NavToggle from './nav-toggle/NavToggle';
import NavLogo from './nav-logo/NavLogo';
import NavItem from './nav-item/NavItem';
import NavLink from './nav-link/NavLink';
import CountryBtn from './country-button/CountryButton';
import CartButton from './cart-button/CartButton';
import CategoryButton from './category-button/CategoryButton';

function Nav(props) {
    const navItems = {
        login: { title: "Login", href:"../login/index.html" },
        signUp: { title: "Sign Up", href:"../sign-up/index.html" },
        contactUs: { title: "Contact Us", href:"../contact-us/index.html" },
        lang: { title: "العربية", href:"#"},
        country: { title: "", href:"#"},
        cart: { title: "", href:"../checkout/index.html"},
        category: { title: "", href:"#"}
    };

    return (
        <nav className="navbar">
            <NavLogo />

            <div className="navigation">
                <ul className="navigation__items">
                    <NavItem>
                        <NavLink href={navItems.login.href}>
                            {navItems.login.title}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={navItems.signUp.href}>
                            {navItems.signUp.title}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={navItems.contactUs.href}>
                            {navItems.contactUs.title}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={navItems.lang.href}>
                            {navItems.lang.title}
                        </NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <CountryBtn />
                    </NavItem>
                    
                    <NavItem>
                        <NavLink href={navItems.cart.href}>
                            <CartButton />
                        </NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <CategoryButton />
                    </NavItem>
                </ul>
            </div>

            <NavToggle />
        </nav>
    );
}

export default Nav;