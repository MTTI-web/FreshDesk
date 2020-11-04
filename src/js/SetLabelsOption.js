import React from 'react';

function SetLabelsOption({ emails, labels, currentLabel }) {
    return (
        <form className="setLabelsOptionForm">
            <select
                id="setLabelsOptionInput"
                className="setLabelsOptionInput"
                value="Inbox"
                onChange={(e) => {
                    const labelSelected = e.currentTarget.value;
                    console.log(labelSelected);
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