// Importing Libraries
import React, { useState } from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// Importing Data
import emailsWithIDs from './modules/data/emails.js';
import labelsArray from './modules/data/mainLabels.js';
// Importing Components
import DisplayEmails from './modules/components/DisplayEmails.js';
import DisplayLabels from "./modules/components/DisplayLabels.js";
import DisplayHeader from './modules/components/DisplayHeader.js';
import DeleteEmailOption from './modules/components/DeleteEmailOption.js';
import ArchiveEmailOption from './modules/components/ArchiveEmailOption.js';
import CreateLabelOption from './modules/components/CreateLabelOption.js';
import OpenDictionaryButton from './modules/components/OpenDictionaryButton.js';
import Dictionary from './modules/components/Dictionary.js';
import EmailView from './modules/components/EmailView.js';

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