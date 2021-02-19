function NavItem(props) {
    return (
        <li className="navigation__item">
            {props.children}
        </li>
    );
}

export default NavItem;