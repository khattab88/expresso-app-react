import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const filterd = this.props.items.filter(item => item.name.includes(this.props.term));

        return (
            <div>
                <ul style={{ listStyle: 'none' }}>
                    {
                        filterd.map((item) =>
                            <li style={{ fontSize: '2rem' }} id={item.id} key={item.id}>{item.name}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default List;