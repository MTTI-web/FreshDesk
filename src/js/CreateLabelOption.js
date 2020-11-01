import React from 'react';

function CreateLabelOption({setLabels, labels}) {
    return (
        <form
            className="create-label-input-form"
            onSubmit={(e) => {
                e.preventDefault();
                const newLabel = e.currentTarget.createLabelInput.value;
                console.log(newLabel);
                if (newLabel && !labels.includes(newLabel)) {
                    setLabels([...labels, newLabel]);
                    e.currentTarget.createLabelInput.value = "";
                };
            }}
        >
            <label
                htmlFor="createLabelInput"
                className="create-label-label"
            >
                <input
                    type="text"
                    name="createLabelInput"
                    id="createLabelInput"
                    autoComplete="off"
                />
            </label>
            <button type="submit">Create</button>
        </form>
    );
};

export default CreateLabelOption;