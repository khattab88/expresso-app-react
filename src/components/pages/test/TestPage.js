import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// Redux-related stuff
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import './Test.scss';

// Components
import Search from './search/Search';
import Accordion from './accordion/Accordion';
import WikiSearch from './wiki-search/WikiSearch';
import Dropdown from './dropdown/Dropdown';
import Translator from './translator/Translator';
import ShoppingCart from './shopping-cart/ShoppingCart';
import Blog from './blog/Blog';

// Redux Reducers
import shoppingCartReducers from './shopping-cart/redux/reducers';
import blogReducers from './blog/store/reducers';

class TestPage extends React.Component {
    constructor(props) {
        super(props);

        this.navItemStyles = {
            fontSize: '1.5rem',
            marginRight: ".5rem"
        };
    }

    render() {
        return (
            <main className="main">
                
                <Router>
                    <nav style={{ margin: "1rem" }}>
                        <ul style={{ listStyle: 'none', display: 'flex' }}>
                            <li style={this.navItemStyles}>
                                <Link to="/">Home</Link>
                            </li>
                            <li style={this.navItemStyles}>
                                <Link to="/accordion">Accordion</Link>
                            </li>
                            <li style={this.navItemStyles}>
                                <Link to="/wiki-search">WikiSearch</Link>
                            </li>
                            <li style={this.navItemStyles}>
                                <Link to="/dropdown">Dropdown</Link>
                            </li>
                            <li style={this.navItemStyles}>
                                <Link to="/translator">Translator</Link>
                            </li>
                            <li style={this.navItemStyles}>
                                <Link to="/shopping-cart">Shopping Cart</Link>
                            </li>
                            <li style={this.navItemStyles}>
                                <Link to="/blog">Blog</Link>
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
                        <Route path="/shopping-cart">
                            <Provider store={createStore(shoppingCartReducers)}>
                                <ShoppingCart />
                            </Provider>
                        </Route>
                        <Route path="/blog">
                            <Provider store={createStore(blogReducers, applyMiddleware(thunk))}>
                                <Blog />
                            </Provider>
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