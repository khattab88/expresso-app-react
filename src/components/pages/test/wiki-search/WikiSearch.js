import { useState, useEffect } from 'react';

import axios from 'axios';
import _ from 'lodash';

import './WikiSearch.scss';

function WikiSearch(props) {

    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        console.log(searchTerm);

        const search = async () => {
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    format: "json",
                    origin: "*",
                    withCredentials: "false",
                    srsearch: searchTerm
                }
            });

            setResults(data.query.search);
        };

        // debounce search for 500 ms
        const timeoutId = setTimeout(() => {
            if (searchTerm) {
                search();
            }
        }, 1000);

        // clean func (returned by from useEffect() hook)
        return () => {
            clearTimeout(timeoutId);
        };

    }, [searchTerm]);


    const renderResults = results.map((result) =>
        <li className="search-result" data-id={result.pageid} key={result.pageid}>
            <div className="search-result__content">
                <p className="search-result__title">{result.title}</p>
                <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            </div>
            <div className="search-result__link">
                <a href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank">Go</a>
            </div>
        </li>
    );

    return (
        <div className="wiki-search">
            <h2 className="wiki-search__title">Wiki Search</h2>

            <input className="wiki-search__input" placeholder="search for..." value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)} />

            <ul className="wiki-search__list">
                {renderResults}
            </ul>

        </div>
    );
}

export default WikiSearch;