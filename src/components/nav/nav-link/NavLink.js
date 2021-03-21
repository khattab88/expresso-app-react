import { Link } from "react-router-dom";

function NavLink(props) {
    return(
        <Link to={props.href} className="navigation__link">{props.children}</Link>
    );
}

export default NavLink;