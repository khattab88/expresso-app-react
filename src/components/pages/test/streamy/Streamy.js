import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import StreamList from './streams/StreamList';
import StreamView from './streams/StreamView';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';

import "./Streamy.scss";

const Streamy = props => {
    return (
        <section className="streamy">
            <Router>
                <div>
                    <Header />
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' exact component={StreamCreate} />
                    <Route path='/streamy/streams/view' exact component={StreamView} />
                    <Route path='/streamy/streams/edit' exact component={StreamEdit} />
                    <Route path='/streamy/streams/delete' exact component={StreamDelete} />
                </div>
            </Router>
        </section>
    );
}

export default Streamy;