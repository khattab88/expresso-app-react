import React from 'react';
import axios from 'axios';

import Input from './Input';
import List from './List';

import tagApi from '../../../../api/TagApi';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            items: []
        };

        this.fetchData = this.fetchData.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    async componentDidMount() {
        const items = await this.fetchData();

        this.setState({ items });
    }

    async fetchData(term) {
        return await tagApi.getTags(term);
    }

    onInputChange(value) {
        this.setState({ term: value });
    }

    async onSearch() {
        // const items = await this.fetchData(this.state.term);
        // this.setState({ items });
    }

    render() {
        return (
            <div style={{ border: '1px solid #ccc', width: '30%', margin: '1rem 0 0 2rem' }}>
                <Input term={this.state.term} onSearch={this.onSearch} onInputChange={this.onInputChange} />
                <List term={this.state.term} items={this.state.items} />
            </div>
        );
    }
}

export default Search;