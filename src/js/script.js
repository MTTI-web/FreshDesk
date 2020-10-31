import React, { useState } from 'react';
import { render } from 'react-dom';
// import { Router } from 'react-router';
// import { Router, Link } from '@reach/router';
import DisplayEmails from './modules/components/DisplayEmails.js';
import DisplayLabels from "./modules/components/DisplayLabels.js";
import emailsWithIDs from './modules/data/emails.js';
import labelsArray from './modules/data/mainLabels.js';
import DisplayHeader from './modules/components/DisplayHeader.js';
import DeleteEmailOption from './modules/components/DeleteEmailOption.js';
import ArchiveEmailOption from './modules/components/ArchiveEmailOption.js';
import CreateLabelOption from './modules/components/CreateLabelOption.js';

function App() {
    const [labels, setLabels] = useState([...labelsArray]);
    const [currentLabel, setCurrentLabel] = useState("Inbox");
    const [deletedEmails, setDeletedEmails] = useState([...emailsWithIDs.filter(email => {email.deleted})]);
    const [archivedEmails, setArchivedEmails] = useState([...emailsWithIDs.filter(email => {email.archived})]);

    return (
        <div className="all-page">
            <DisplayHeader />
            <div className="edit-options-bar">
                <CreateLabelOption
                    setLabels={setLabels}
                    labels={labels}
                />
                <div className="quick-edit-options">
                    <DeleteEmailOption
                        setDeletedEmails={setDeletedEmails}
                        deletedEmails={deletedEmails}
                        emailsWithIDs={emailsWithIDs}
                    />
                    <ArchiveEmailOption
                        setArchivedEmails={setArchivedEmails}
                        archivedEmails={archivedEmails}
                        emailsWithIDs={emailsWithIDs}
                    />
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