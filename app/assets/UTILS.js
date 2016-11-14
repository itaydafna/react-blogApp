
//function which turns an authors name to this format: itay-dafna
//(also used by the posts-filter component)
export const normalizeAuthor = (authorName) => {
    return authorName.replace(/\s+/g, '-').toLowerCase();
};

//function which turns a tags name to this format : angularjs
//(also used by the posts-filter component)
export const normalizeTag = (tagName) => {
    return tagName.replace(/\s+/g, '').toLowerCase()
};

//function which turns a date string to this format : monthname-yearnumber (march-1982)
//(also used by the posts-filter component)

export const normalizeMonth = (dateString) => {
    const monthNames = ["january", "february", "march", "april", "may", "june",
        "july", "august", "september", "october", "november", "december"
    ];
    let date = new Date(Number(dateString));
    return `${monthNames[date.getMonth()]}-${date.getFullYear()}`
};

//function which removes all non-letter characters from string and replaces space with dash
export const removeNonLetters=(str)=>{
    return str.replace(/[^\w]/g,' ').replace(/\s+/g, '-');
}

