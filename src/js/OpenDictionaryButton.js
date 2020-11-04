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
            <ion-icon name="book-outline"></ion-icon>
        </div>
    )
};

export default OpenDictionaryButton;