function SecondaryNavItem(props) {
    return(
        <li className="secondary-navigation__item">
            <a href={props.href} className="secondary-navigation__link">{props.title}</a>
        </li>
    );
}

export default SecondaryNavItem;