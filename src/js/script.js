// Importing Libraries
import React, { useState } from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// Importing Data
import emailsWithIDs from './modules/emails.js';
import labelsArray from './modules/mainLabels.js';
// Importing Components
import DisplayEmails from './modules/DisplayEmails.js';
import DisplayLabels from "./modules/DisplayLabels.js";
import DisplayHeader from './modules/DisplayHeader.js';
import DeleteEmailOption from './modules/DeleteEmailOption.js';
import ArchiveEmailOption from './modules/ArchiveEmailOption.js';
import CreateLabelOption from './modules/CreateLabelOption.js';
import OpenDictionaryButton from './modules/OpenDictionaryButton.js';
import Dictionary from './modules/Dictionary.js';
import EmailView from './modules/EmailView.js';

function App() {
    const [labels, setLabels] = useState([...labelsArray]);
    const [currentLabel, setCurrentLabel] = useState("Inbox");
    const [deletedEmails, setDeletedEmails] = useState(
        [...emailsWithIDs.filter(email => { email.deleted })]
    );
    const [archivedEmails, setArchivedEmails] = useState(
        [...emailsWithIDs.filter(email => { email.archived })]
    );

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
                <OpenDictionaryButton />
            </div>
            <Dictionary />
            <div className="main-section">
                <DisplayLabels labels={labels} setCurrentLabel={setCurrentLabel} />
                <Router>
                    <Switch>
                        <Route
                            path="/"
                            render={() => (
                                <DisplayEmails emails={emailsWithIDs} label={currentLabel} />
                            )}
                            exact
                        />
                        <Route
                            path="/emailView/:id"
                            component={EmailView}
                            exact
                        />
                    </Switch>
                </Router>
            </div>
        </div>
    );
};

render(<App />, document.getElementById('root'));