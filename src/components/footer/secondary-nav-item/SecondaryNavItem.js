import { Link } from "react-router-dom";

function SecondaryNavItem(props) {
    return(
        <li className="secondary-navigation__item">
            <Link to={props.href} className="secondary-navigation__link">{props.title}</Link>
        </li>
    );
}

export default SecondaryNavItem;