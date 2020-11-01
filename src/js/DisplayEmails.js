import React from 'react';
import { Link } from 'react-router-dom';

function DisplayEmails({ emails, label }) {
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
        <div className="emailsList">
            {
                emailsOfLabels.map(email => (
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
            }
        </div>
    );
};

export default DisplayEmails;