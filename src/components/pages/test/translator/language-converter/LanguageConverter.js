import { useState, useEffect } from "react";
import axios from 'axios';

function LanguageConverter({language, text}) {
    const API_KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

    const [output, setOutput] = useState("");

    useEffect(() => {
        // console.log(`${language}: ${text}`);

        const translate = async () =>{
            const response = await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
                params: {
                    q: text,
                    target: language,
                    key: API_KEY
                }
            });

            const output = response.data.data.translations[0].translatedText;
            setOutput(output);
        };

        const timeoutId = setTimeout(() =>{
            if(text) {
                translate();
            }
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        }

    }, [language, text]);

    return(
        <div className="language-converter" style={{ display: "flex" }}>
            <label style={{ fontWeight: "400", paddingLeft: "1rem" }}>Result</label>
            <p style={{ paddingLeft: ".5rem"}} >{output}</p>
        </div>
    );
}

export default LanguageConverter;