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
        return (
            <main className="main">
                {/* <Search /> */}
                {/* <Accordion /> */}
                {/* <WikiSearch /> */}
                {/* <Dropdown /> */}
                {/* <Translator /> */}

                
            </main>
        );
    }
}

export default TestPage;