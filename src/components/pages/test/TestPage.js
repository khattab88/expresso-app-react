import React from 'react';

import './Test.scss';

import Search from './search/Search';
import Accordion from './accordion/Accordion';

class TestPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="main">
                {/* <Search /> */}
                <Accordion />
            </main>
        );
    }
}

export default TestPage;