import React from 'react';

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
    }
    return (
        <div className="emailsList">
            {
                emailsOfLabels.map(email => (
                    <div
                        className="emailListItem"
                        key={email.id}
                        data-id={email.id}
                        onClick={(e) => {
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
                ))
            }
        </div>
    );
};

export default DisplayEmails;