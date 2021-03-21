import { Link } from "react-router-dom";

function NavLogo() {
    return(
        <div className="logo">
            <Link to="/" className="logo__link">
                <h2 className="logo__title">Expresso</h2>
            </Link>
        </div>
    );
}

export default NavLogo;