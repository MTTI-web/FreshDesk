import React from 'react';

function DisplayLablels({ labels, setCurrentLabel }) {
    return (
        <div className="sidebar">
            {labels.map(label => (
                <div
                    className="label-filter"
                    key={label}
                    onClick={(e) => {
                        console.log(e.currentTarget);
                        setCurrentLabel(e.currentTarget.textContent);
                    }}
                >
                    {label}
                </div>
            ))}
        </div>
    );
};

export default DisplayLablels;