import React from 'react';

function ArchiveEmailOption({ setArchivedEmails, archivedEmails, emailsWithIDs }) {
    return (
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
    );
};

export default ArchiveEmailOption;