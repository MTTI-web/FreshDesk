import React from 'react';

function OpenDictionaryButton() {
    return (
        <div
            className="openDictionaryButton"
            onClick={() => {
                const dictionary = document.querySelector('.dictionaryOuterModal');
                dictionary.classList.toggle('using');
            }}
        >
            Dic
        </div>
    )
};

export default OpenDictionaryButton;