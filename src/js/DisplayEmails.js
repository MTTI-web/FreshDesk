import React from 'react';
import { Link } from 'react-router-dom';

function DisplayEmails({ emails, label, setReRender, reRenderValue }) {
    let emailsOfLabels;
    if (label != "Bin" && label != "Archived") {
        emailsOfLabels = emails.filter((email) =>
            email.labels.includes(label) && !email.deleted && !email.archived
        );
    } else if (label == "Archived") {
        emailsOfLabels = emails.filter(email => email.archived);
    } else if (label == "Bin") {
        emailsOfLabels = emails.filter(email => email.deleted);
    };
    return (
        <div className="emailsPreviewSection">
            <div className="currentLabelInEmailsList">{label}</div>
            <div className="emailsList">
                {emailsOfLabels.length
                    ? emailsOfLabels.map(email => (
                        <Link to={`/emailView/${email.id}`} key={email.id}>
                            <div
                                className="emailListItem"
                                data-id={email.id}
                                onContextMenu={(e) => {
                                    e.preventDefault();
                                    const emailClicked = e.currentTarget;
                                    console.log(e.currentTarget);
                                    emailClicked.classList.toggle("selected");
                                }}
                            >
                                <div className="labelsInEmailPreview">
                                    {email.labels.map(label => (
                                        <div
                                            className="labelInEmailPreview"
                                            data-label={label}
                                            key={label}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const labelClicked = e.currentTarget.dataset.label;
                                                console.log(labelClicked);
                                                const emailSelected = e.currentTarget.parentElement.parentElement;
                                                console.log(emailSelected.dataset.id);
                                                const emailArrayObject = emailsOfLabels.find(email => (
                                                    email.id == emailSelected.dataset.id
                                                ));
                                                console.log(emailArrayObject);
                                                if (labelClicked != "Inbox" && labelClicked != "Bin" && labelClicked != "Archived") {
                                                    emailArrayObject.labels.splice(email.labels.indexOf({labelClicked}), 1);
                                                    setReRender(!reRenderValue);
                                                } else {
                                                    console.log("Cannot remove this label.");
                                                }
                                            }}
                                        >
                                            {label}
                                            <div className="removeLabelFromEmailButton">
                                                &times;
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="sender-name">
                                    {email.senderName}
                                </div>
                                <div className="email-subject">
                                    {email.subject}
                                </div>
                                <div className="email-content-preview">
                                    {email.content}
                                </div>
                            </div>
                        </Link>
                    ))
                    : <div className="noEmailsMessage">No emails in this label.</div>
                }
            </div>
        </div>
    );
};

export default DisplayEmails;