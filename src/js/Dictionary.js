import React, { setState } from 'react';
const baseEndpoint = `https://api.dictionaryapi.dev/api/v2/entries`;

function Dictionary() {
    // const wordDefAPI = fetch(`${baseEndpoint}/${lang}/${word}`).then(data => data.json());
    // wordDefAPI.then(data => { wordDef = (data) });
    // console.log(wordDef);
    const [currentLang, setCurrentLang] = setState("en");
    const [currentWord, setCurrentWord] = setState("");
    return (
        <div className="dictionaryOuterModal">
            <div className="dictionary">
                <form
                    className="findWordForm"
                    onSubmit={(e) => {
                        
                    }}
                >
                    <input type="text" name="findWordInput" id="findWordInput" />
                    <select
                        name="langSelectInput"
                        id="langSelectInput"
                        value="English"
                    >
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="es">Spanish</option>
                    </select>
                    <button type="submit">Find</button>
                </form>
                <div className="defintion"></div>
            </div>
        </div>
    );
};

export default Dictionary;