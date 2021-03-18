import { useState } from 'react';

import './Accordion.scss';

function Accordion(props) {

    const [active, setActive] = useState(null);

    const items = [
        { id: "0", title: "what is react?", content: "react is a ui library." },
        { id: "1", title: "what is react used for?", content: "react is used for building ui components." },
        { id: "2", title: "who developed react?", content: "react is developed by facebook." }
    ];

    const handleClick = (id) => {
        // console.log(id);
        // console.log(active);

        if(id === active) {
            setActive(null);
        } else {
            setActive(id);
        }
    }

    const itemList = items.map(item => {
        const className = (item.id === active) ? "item--active" : "item";
        return (
            <li className={className} key={item.id} data-id={item.id} onClick={() => handleClick(item.id)}>
                <p className="item__head">{item.title}</p>
                <div className="item__body">{item.content}</div>
            </li>)
    });

    return (

        <div className="accordion">
            <h1 className="accordion__title">React Quiz</h1>
            <ul className="accordion__list">
                {itemList}
            </ul>
        </div>
    );
}

export default Accordion;