import React, { useState } from 'react';
const baseEndpoint = `https://api.dictionaryapi.dev/api/v2/entries`;

async function fetchWordDef(word, lang) {
    
};

function Dictionary() {
    const [currentLang, setCurrentLang] = useState("en");
    const [currentWord, setCurrentWord] = useState("hi");
    const [wordDef, setWordDef] = useState({});
    return (
        <div className="dictionaryOuterModal">
            <div className="dictionary">
                <form
                    className="findWordForm"
                    onSubmit={(e) => {
                        e.preventDefault();
                        fetch(`${baseEndpoint}/${currentLang}/${currentWord}`).then(data => {
                            data.json().then(def => {
                                console.log(def[0]);
                                setWordDef(def[0]);
                            });
                        });
                    }}
                >
                    <input
                        type="text"
                        name="findWordInput"
                        id="findWordInput"
                        onChange={(e) => {
                            setCurrentWord(e.currentTarget.value);
                        }}
                    />
                    <select
                        name="langSelectInput"
                        id="langSelectInput"
                        value="English"
                        onChange={e => {
                            setCurrentLang(e.currentTarget.value);
                        }}
                    >
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="es">Spanish</option>
                    </select>
                    <button type="submit">Find</button>
                </form>
                {!wordDef.word
                    ? <div className="noWordChosen">No word chosen</div>
                    : <div className="defintion">
                    <h1 className="word">{
                        wordDef.word || "No word chosen"
                    }</h1>
                    <div className="wordDetails">{
                        wordDef.phonetics[0].text || ""
                    }</div>
                    <div className="wordMeaning">{
                        wordDef.meanings[0].definitions[0].definition || ""
                    }</div>
                </div>}
            </div>
        </div>
    );
};

export default Dictionary;