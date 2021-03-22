import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './Test.scss';

import Search from './search/Search';
import Accordion from './accordion/Accordion';
import WikiSearch from './wiki-search/WikiSearch';
import Dropdown from './dropdown/Dropdown';
import Translator from './translator/Translator';

const navItemStyles = {
    fontSize: '1.5rem',
    marginRight: ".5rem"
};

class TestPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(process.env.NODE_ENV);
        console.log(process.env.REACT_APP_APP_ENV);

        return (
            <main className="main">
                {/* <Search /> */}
                {/* <Accordion /> */}
                {/* <WikiSearch /> */}
                {/* <Dropdown /> */}
                {/* <Translator /> */}

                <Router>
                    <nav style={{ margin: "1rem" }}>
                        <ul style={{ listStyle: 'none', display: 'flex' }}>
                            <li style={navItemStyles}>
                                <Link to="/">Home</Link>
                            </li>
                            <li style={navItemStyles}>
                                <Link to="/accordion">Accordion</Link>
                            </li>
                            <li style={navItemStyles}>
                                <Link to="/wiki-search">WikiSearch</Link>
                            </li>
                            <li style={navItemStyles}>
                                <Link to="/dropdown">Dropdown</Link>
                            </li>
                            <li style={navItemStyles}>
                                <Link to="/translator">Translator</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/accordion">
                            <Accordion />
                        </Route>
                        <Route path="/wiki-search">
                            <WikiSearch />
                        </Route>
                        <Route path="/dropdown">
                            <Dropdown />
                        </Route>
                        <Route path="/translator">
                            <Translator />
                        </Route>
                        <Route path="/">
                            <React.Fragment>
                                <h1>Home</h1>
                            </React.Fragment>
                        </Route>
                    </Switch>
                </Router>

            </main>
        );
    }
}

export default TestPage;