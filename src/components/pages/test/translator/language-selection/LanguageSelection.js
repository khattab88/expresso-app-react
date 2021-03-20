import "./LanguageSelection.scss";

function LanguageSelection({languages, selected, onSelectChange}) {

    const renderedLanguages = languages.map(lang =>
        <option key={lang.value} value={lang.value}>{lang.name}</option>
    );

    return(
        <div className="language-selection">
            <label className="language-selection__label">Select Language:</label>
            <select className="language-selection__select" 
                    value={selected} onChange={e => onSelectChange(e.target.value)} >
                {renderedLanguages}
            </select>
        </div>
    );
}

export default LanguageSelection;