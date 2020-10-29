const characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
export function createUniqueEmailID(IDArray = []) {
    let uniqueEmailID = "";
    for (let i = 0; i < 10; i++) {
        uniqueEmailID += characters[Math.floor(Math.random() * characters.length)];
    };
    if (!IDArray.includes(uniqueEmailID)) {
        console.log(uniqueEmailID);
        return uniqueEmailID;
    } else {
        createUniqueEmailID();
    };
};