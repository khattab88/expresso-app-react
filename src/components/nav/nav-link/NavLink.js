function NavLink(props) {
    return(
        <a href={props.href} className="navigation__link">{props.children}</a>
    );
}

export default NavLink;