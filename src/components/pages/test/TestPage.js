import React from 'react';

import './Test.scss';

import Search from './search/Search';

class TestPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="main">
                <Search />
            </main>
        );
    }
}

export default TestPage;