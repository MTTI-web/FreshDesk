// Importing Libraries
import React, { useState } from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// Importing Data
import emailsWithIDs from './emails.js';
import labelsArray from './mainLabels.js';
// Importing Components
import DisplayEmails from './DisplayEmails.js';
import DisplayLabels from "./DisplayLabels.js";
import DisplayHeader from './DisplayHeader.js';
import DeleteEmailOption from './DeleteEmailOption.js';
import ArchiveEmailOption from './ArchiveEmailOption.js';
import CreateLabelOption from './CreateLabelOption.js';
import OpenDictionaryButton from './OpenDictionaryButton.js';
import Dictionary from './Dictionary.js';
import EmailView from './EmailView.js';

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