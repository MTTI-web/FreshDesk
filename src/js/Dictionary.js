import React, { useState } from 'react';
const baseEndpoint = `https://api.dictionaryapi.dev/api/v2/entries`;

function Dictionary() {
    const [currentLang, setCurrentLang] = useState("en");
    const [currentWord, setCurrentWord] = useState("hi");
    const [wordDef, setWordDef] = useState({});
    const [isLoading, setLoadingState] = useState(false);
    return (
        <div className="dictionaryOuterModal">
            <div className="dictionary">
                <div
                    className="closeDictionaryButton"
                    onClick={(e) => {
                        document.querySelector('.dictionaryOuterModal').classList.remove("using");
                    }}
                >&times;</div>
                <form
                    className="findWordForm"
                    onSubmit={(e) => {
                        e.preventDefault();
                        setLoadingState(true);
                        fetch(`${baseEndpoint}/${currentLang}/${currentWord}`).then(data => {
                            data.json().then(def => {
                                console.log(def[0]);
                                setWordDef(def[0]);
                                setLoadingState(false);
                            }, console.error);
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
                {Object.keys(wordDef).length == 0
                    ? (!isLoading
                        ? <div className="message">No word chosen</div>
                        : <div className="loading">Loading...</div>
                    )
                    : (!isLoading
                        ? <div className="defintion">
                            <h1 className="word">
                                {wordDef.word || "Sorry, we could not find the definition of the given word."}
                            </h1>
                            <div className="wordPhonetics">
                                {wordDef.phonetics.map(({ text }) => (
                                    <div className="wordPhonetic" key={text}>{text}</div>
                                ))}
                            </div>
                            <div className="wordMeanings">
                                {wordDef.meanings[0].definitions.map(({ definition }) => (
                                    <div className="wordDefinition" key={definition}>
                                        {definition}
                                    </div>
                                ))}
                            </div>
                        </div>
                        : <div className="loading">Loading...</div>
                    )
                }
            </div>
        </div>
    );
};

export default Dictionary;