import React from 'react';
import { Link } from 'react-router-dom';
import emails from './emails.js';

function EmailView(props) {
    console.log(props.match.params.id);
    const emailSelected = emails.find((email) => (email.id == props.match.params.id));
    return (
        <div className="emailView">
            <Link to="/" className="emailBackButton">
                <ion-icon name="arrow-back-outline"></ion-icon>
            </Link>
            <div className="emailViewSubject">{emailSelected.subject}</div>
            <div className="senderDetails">
                <div className="emailViewSender">{emailSelected.senderName}</div>
                <div className="emailViewSenderEmailAddress">{emailSelected.senderEmailAddress}</div>
            </div>
            <div className="labelsList">{
                emailSelected.labels.map(label => (
                    <div className="labelTag" key={label}>{label}</div>
                ))
            }</div>
            <div className="emailViewContent">{emailSelected.content}</div>
        </div>
    );
};

export default EmailView;