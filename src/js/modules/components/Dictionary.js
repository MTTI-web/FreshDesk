import React, { Component } from 'react';
const baseEndpoint = `https://api.dictionaryapi.dev/api/v2/entries`;

class Dictionary extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };
    render() {
        return (
            <div className="dictionaryOuterModal">
                <div className="dictionary">
                    <form className="findWordForm">
                        <input type="text" name="findWordInput" id="findWordInput" />
                        <button type="submit">Find</button>
                    </form>
                    <div className="defintion"></div>
                </div>
            </div>
        )
    }
};

// function Dictionary({ word, lang }) {
//     let wordDef = {};
//     const wordDefAPI = fetch(`${baseEndpoint}/${lang}/${word}`).then(data => data.json());
//     wordDefAPI.then(data => { wordDef = (data) });
//     console.log(wordDef);
//     return (
//         <div className="dictionary">
//             <form className="findWordForm">
//                 <input type="text" name="findWordInput" id="findWordInput" />
//                 <button type="submit">Find</button>
//             </form>
//             <div className="defintion"></div>
//         </div>
//     );
// };

export default Dictionary;