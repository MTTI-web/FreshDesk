import React from 'react';

function DisplayHeader() {
    return (
        <header>
            <div className="company-image"></div>
            <form
                className="search-emails-form"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    type="text"
                    name="searchEmails"
                    id="searchEmails"
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