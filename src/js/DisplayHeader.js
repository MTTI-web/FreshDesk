import React from 'react';
import { Router } from 'react-router-dom';

function DisplayHeader({ emailsArray }) {
    return (
        <header>
            <div className="company-image"></div>
                <form
                    className="search-emails-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const searchQuery = e.currentTarget.searchEmailsInput.value;
                        console.log(searchQuery);
                    }}
                >
                    <input
                        type="text"
                        name="searchEmailsInput"
                        id="searchEmailsInput"
                    />
                    <button type="submit">Search</button>
                </form>
            <div className="settings-button">
                <ion-icon name="settings-outline"></ion-icon>
            </div>
        </header>
    )
};

export default DisplayHeader;