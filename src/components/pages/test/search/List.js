import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const numOfItems = this.props.items.length
        return (
            <div>
                <ul style={{ listStyle: 'none' }}>
                    {
                        this.props.items.map((item) =>
                            <li style={{ fontSize: '2rem' }} key={item.id}>{item.name}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default List;