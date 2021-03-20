import { useState, useEffect } from "react";

import "./Translator.scss";

import LanguageSelection from './language-selection/LanguageSelection';
import LanguageConverter from './language-converter/LanguageConverter';

function Translator(props) {
    const languages = [
        { name: "English", value: "en" }, 
        { name: "Arabic", value: "ar" },
        { name: "French", value: "fr" },
        { name: "German", value: "de" },
    ];

    const [language, setLanguage] = useState(languages[0].value);
    const [text, setText] = useState("");

    return(
        <div className="translator">
            <h1 className="translator__title">Translator</h1>

            <label className="translator__label">Enter text</label>
            <input className="translator__input" value={text} onChange={e => setText(e.target.value)} />

            <LanguageSelection languages={languages} selected={language} onSelectChange={setLanguage} />
            <LanguageConverter language={language} text={text} />
        </div>
    );
}

export default Translator;