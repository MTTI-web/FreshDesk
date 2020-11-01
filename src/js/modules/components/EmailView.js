import React from 'react';
import emails from '../data/emails.js';

function EmailView(props) {
    console.log(props.match.params.id);
    const emailSelected = emails.find((email) => (email.id == props.match.params.id));
    return (
        <div className="emailView">
            <div className="emailViewSubject">{emailSelected.subject}</div>
            <div className="emailViewSender">{emailSelected.senderName}</div>
            <div className="emailViewContent">{emailSelected.content}</div>
        </div>
    ); 
};

export default EmailView;