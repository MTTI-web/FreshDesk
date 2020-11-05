import React from 'react';

function SetLabelsOption({ emails, labels, currentLabel, setReRender, reRenderValue }) {
    return (
        <form className="setLabelsOptionForm">
            <select
                id="setLabelsOptionInput"
                className="setLabelsOptionInput"
                value="Inbox"
                onChange={(e) => {
                    const labelSelected = e.currentTarget.value;
                    console.log(labelSelected);
                    const selectedEmails = document.querySelectorAll(".emailListItem.selected");
                    let IDsOfSelectedEmails = [];
                    selectedEmails.forEach(email => {
                        IDsOfSelectedEmails.push(email.dataset.id);
                    });
                    const emailItemsFromArray = emails.filter(email => {
                        if (IDsOfSelectedEmails.includes(email.id)) {
                            return true;
                        } else {
                            return false;
                        }
                    });
                    console.log(emailItemsFromArray);
                    emailItemsFromArray.forEach(email => {
                        email.labels.push(labelSelected);
                        console.log(email);
                    });
                    setReRender(!reRenderValue);
                }}
            >
                {labels.map((label) => (
                    label == "Bin" || label == "Archived" ? null : (
                        <option value={label} key={label}>{label}</option>
                    )
                ))}
            </select>
        </form>
    );
};

export default SetLabelsOption;