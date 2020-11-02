import { createUniqueEmailID } from './utility_funcitons.js';

const emails = [
    {
        subject: "Lorem ipsum dolor sit amet",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consectetur rem consequatur! Exercitationem, est? Quidem itaque deserunt maxime expedita consectetur, repellat est dolor minima nesciunt culpa quae vitae eveniet deleniti consequuntur ab similique doloremque voluptatem optio. Ipsa cupiditate perferendis eum nisi in nam distinctio sed neque fugiat molestiae! Id, ex.",
        senderEmailAddress: "amazon@gmail.com",
        senderName: "Amazon",
        deleted: false,
        archived: false,
        labels: ["Inbox"],
    },
    {
        subject: "Security issue",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consectetur rem consequatur! Exercitationem, est? Quidem itaque deserunt maxime expedita consectetur, repellat est dolor minima nesciunt culpa quae vitae eveniet deleniti consequuntur ab similique doloremque voluptatem optio. Ipsa cupiditate perferendis eum nisi in nam distinctio sed neque fugiat molestiae! Id, ex.",
        senderEmailAddress: "google@gmail.com",
        senderName: "Google",
        deleted: false,
        archived: false,
        labels: ["Inbox"],
    },
    {
        subject: "Your new site is published",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consectetur rem consequatur! Exercitationem, est? Quidem itaque deserunt maxime expedita consectetur, repellat est dolor minima nesciunt culpa quae vitae eveniet deleniti consequuntur ab similique doloremque voluptatem optio. Ipsa cupiditate perferendis eum nisi in nam distinctio sed neque fugiat molestiae! Id, ex.",
        senderEmailAddress: "github@gmail.com",
        senderName: "GitHub",
        deleted: false,
        archived: false,
        labels: ["Inbox"],
    },
    {
        subject: "A new assignment posted",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consectetur rem consequatur! Exercitationem, est? Quidem itaque deserunt maxime expedita consectetur, repellat est dolor minima nesciunt culpa quae vitae eveniet deleniti consequuntur ab similique doloremque voluptatem optio. Ipsa cupiditate perferendis eum nisi in nam distinctio sed neque fugiat molestiae! Id, ex.",
        senderEmailAddress: "classroom@gmail.com",
        senderName: "Classroom",
        deleted: false,
        archived: false,
        labels: ["Inbox"],
    },
];

let emailIDArray = [];
for (let i = 0; i < emails.length; i++) {
    emailIDArray.push(createUniqueEmailID(emailIDArray));
};

const emailsWithIDs = emails.map((email, id) => {
    email.id = emailIDArray[id];
    console.log(id);
});

export default emails;