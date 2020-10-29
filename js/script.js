import React, { useState } from 'react';
import { render } from 'react-dom';
// import { Router } from 'react-router';
import { Router, Link } from '@reach/router';
import DisplayEmails from './modules/components/DisplayEmails.js';
import DisplayLabels from "./modules/components/DisplayLabels.js";
import emailsWithIDs from './modules/data/emails.js';
import labelsArray from './modules/data/mainLabels.js';
import DisplayHeader from './modules/components/DisplayHeader.js';

function App() {
    const [labels, setLabels] = useState([...labelsArray]);
    const [currentLabel, setCurrentLabel] = useState("Inbox");
    const [deletedEmails, setDeletedEmails] = useState([...emailsWithIDs.filter(email => {
        if (email.deleted) {
            return true;
        } else {
            return false;
        }
    })]);
    const [archivedEmails, setArchivedEmails] = useState([...emailsWithIDs.filter(email => {
        if (email.archived) {
            return true;
        } else {
            return false;
        }
    })]);
    return (
        <div className="all-page">
            <DisplayHeader />
            <div className="edit-options-bar">
                <form
                    className="create-label-input-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const newLabel = e.currentTarget.createLabelInput.value;
                        console.log(newLabel);
                        if (newLabel && !labels.includes(newLabel)) {
                            setLabels([...labels, newLabel]);
                            e.currentTarget.createLabelInput.value = "";
                        };
                    }}
                >
                    <label
                        htmlFor="createLabelInput"
                        className="create-label-label"
                    >
                        <input
                            type="text"
                            name="createLabelInput"
                            id="createLabelInput"
                            autoComplete="off"
                        />
                    </label>
                    <button type="submit">Create</button>
                </form>
                <div className="quick-edit-options">
                    <div
                        className="delete-option"
                        onClick={(e) => {
                            const selectedEmails = document.querySelectorAll(".emailListItem.selected");
                            let IDsOfSelectedEmails = [];
                            selectedEmails.forEach(email => {
                                IDsOfSelectedEmails.push(email.dataset.id);
                            });
                            const emailItemsFromArray = emailsWithIDs.filter(email => {
                                if (IDsOfSelectedEmails.includes(email.id)) {
                                    return true;
                                } else {
                                    return false;
                                }
                            });
                            emailItemsFromArray.forEach(email => {
                                email.deleted = true;
                                email.labels.push("Bin");
                                email.labels.splice(email.labels.indexOf("Inbox"), 1);
                                setDeletedEmails([...deletedEmails, email]);
                            });
                            console.log(emailItemsFromArray);
                            console.log(deletedEmails);
                        }}
                    >
                        Del
                    </div>
                    <div
                        className="archive-option"
                        onClick={(e) => {
                            const selectedEmails = document.querySelectorAll(".emailListItem.selected");
                            let IDsOfSelectedEmails = [];
                            selectedEmails.forEach(email => {
                                IDsOfSelectedEmails.push(email.dataset.id);
                            });
                            const emailItemsFromArray = emailsWithIDs.filter(email => {
                                if (IDsOfSelectedEmails.includes(email.id)) {
                                    return true;
                                } else {
                                    return false;
                                };
                            });
                            emailItemsFromArray.forEach(email => {
                                email.archived = true;
                                email.labels.push("Archived");
                                email.labels.splice(email.labels.indexOf("Inbox"), 1);
                                setArchivedEmails([...archivedEmails, email]);
                            });
                            console.log(emailItemsFromArray);
                        }}
                    >
                        Archive
                    </div>
                </div>
            </div>
            <div className="main-section">
                <DisplayLabels labels={labels} setCurrentLabel={setCurrentLabel} />
                <DisplayEmails emails={emailsWithIDs} label={currentLabel} />
            </div>
        </div>
    );
};

render(<App />, document.getElementById('root'));