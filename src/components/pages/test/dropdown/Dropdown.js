import { useState, useEffect, useRef } from "react";

import "./Dropdown.scss";

function Dropdown(props) {

    const options = [
        { id: "0", label: "Red", value: "red" },
        { id: "1", label: "Green", value: "green" },
        { id: "2", label: "Blue", value: "blue" }
    ];

    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState(options[0].value);
    const ref = useRef();

    useEffect(() => {
        // console.log(selection);

        const onBodyClick = (e) => {
            // console.log("body click");

            if(ref.current && ref.current.contains(e.target)) {
                return;
            }

            setOpen(false);
        };

        document.body.addEventListener("click", onBodyClick, true);

        return () => {
            document.body.removeEventListener("click", onBodyClick);
        };

    }, []);

    const optionList = options.map(option => {
        if (option.value !== selection) {
            return (
                <div className="dropdown__option" key={option.id} data-value={option.value}
                    onClick={() => {
                        // console.log("item clicked");
                        setSelection(option.value);
                    }}>
                    {option.label}
                </div>
            );
        } else {
            return null
        }
    });

    return (
        <section className="dropdown" ref={ref}>
            <h1 className="dropdown__title">Dropdown</h1>

            <div className="dropdown__select" 
                onClick={() => {
                    // console.log("dropdown clicked");
                    setOpen(!open);
                }}>
                <div className={`dropdown__head ${open ? "dropdown__head--open" : ""}`} style={{ color: `${selection}` }}>
                    <p>selected color is {selection}</p>
                    <span className="material-icons icon--close">keyboard_arrow_up</span>
                    <span className="material-icons icon--open">keyboard_arrow_down</span>
                </div>
                <div className={`dropdown__body ${open ? "dropdown__body--open" : ""}`}>
                    {optionList}
                </div>
            </div>

        </section>
    );
}

export default Dropdown;