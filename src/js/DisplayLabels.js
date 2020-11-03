import React from 'react';
import { Link, Router } from 'react-router-dom';

function DisplayLablels({ labels, setCurrentLabel, currentLabel }) {
    return (
        <div className="sidebar">
            {labels.map(label => (
                <Link
                    to="/"
                    className={`label-filter ${label == currentLabel ? "currentLabel" : ""}`}
                    key={label}
                    onClick={(e) => {
                        console.log(e.currentTarget);
                        setCurrentLabel(e.currentTarget.textContent);
                    }}
                >
                    {label}
                </Link>
            ))}
        </div>
    );
};

export default DisplayLablels;