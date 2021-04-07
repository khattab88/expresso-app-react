import React from 'react';
import { Link } from "react-router-dom";

import GoogleAuth from './GoogleAuth';

const Header = props => {
    return(
        <nav className="streamy__nav">
            <ul>
                <li>
                    <Link to='/'>Streamy</Link>
                </li>
                <li>
                    <Link to='/'>All Streams</Link>
                </li>
            </ul>

            <GoogleAuth />
        </nav>
    );
}

export default Header;