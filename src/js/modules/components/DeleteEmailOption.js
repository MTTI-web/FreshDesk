import React from 'react';

function DeleteEmailOption({ setDeletedEmails, deletedEmails, emailsWithIDs }) {
    return (
        <div
            className="delete-email-option"
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
    );
};

export default DeleteEmailOption;