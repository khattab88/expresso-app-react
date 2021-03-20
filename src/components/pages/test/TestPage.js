import React from 'react';

import './Test.scss';

import Search from './search/Search';
import Accordion from './accordion/Accordion';
import WikiSearch from './wiki-search/WikiSearch';
import Dropdown from './dropdown/Dropdown';
import Translator from './translator/Translator';

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
                <Translator />
            </main>
        );
    }
}

export default TestPage;