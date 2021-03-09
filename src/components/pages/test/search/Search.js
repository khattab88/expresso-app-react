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
            items: [],
            err: null
        };

        this.fetchData = this.fetchData.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSearch = this.onSearch.bind(this);

        this.parent = React.createRef();
        this.textInput = React.createRef();
    }

    async componentDidMount() {
        const res = await this.fetchData();

        if (res.err) {
            this.setState({ err: res.err });
        } else {
            const items = res.data;
            this.setState({ items });
        }
    }

    componentDidUpdate() {
        // console.log(this.parent);
        // console.log(this.textInput.current);
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
        if (this.state.err) {
            return (<div style={{ textAlign: 'center', color: '#f00', fontSize: '20px', marginTop: '30px' }}>ERORR!!!</div>);
        }

        return (
            <div style={{ border: '1px solid #ccc', width: '30%', margin: '1rem 0 0 2rem' }} ref={this.parent}>
                <Input term={this.state.term} onSearch={this.onSearch} onInputChange={this.onInputChange} ref={this.textInput} />
                <List term={this.state.term} items={this.state.items} />
            </div>
        );
    }
}

export default Search;