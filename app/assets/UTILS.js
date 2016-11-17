import _ from 'lodash';

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

//function which removes all non-letter characters from string and replaces space with
export const removeNonLetters=(str)=>{
    return str.replace(/[^\w]/g,' ').replace(/\s+/g, '-');
};



//function which creates an object of {filter: count} pairs out of all the posts in the store
//filter is the parameter which the posts are going to be filtered by (category,author);

export const createFiltersMap = (posts, filter) => {
    let resultObj = {},
        resultArr = [],
    //function which checks if a given filter (instance) exists in the results object - adds it there if it doesn't
    //or adds 1 to its counter if it does
        mapToResultObj = (instance)=> {
            _.has(resultObj, instance) ? resultObj[instance] = resultObj[instance] + 1 : resultObj[instance] = 1
        };

    posts.forEach((post)=> {
        //checking if the filter is an array in order to deal with the 'tags' instance (with forEach)
        (Array.isArray(post[filter])) ?
            post[filter].forEach(mapToResultObj) :
            mapToResultObj(post[filter]);
    });
    //turning the result object into an array with [key,value] pairs
    //needed in order to create components out of this data (can't use object itiration in JSX)
    _.forOwn(resultObj, (value, key) => resultArr.push([key, value]));
    //sorting the results array alphabetically based on the the category name
    return resultArr.sort((catA, catB)=> catA[0].toLocaleLowerCase() > catB[0].toLocaleLowerCase());
};

//function which checks if a given month exists in the results object - adds it there if it doesn't
//or adds 1 to its counter if it does

export const createDateMap = (posts) => {
    let resultObj = {},
        resultArr = [];

    //mapping years and months in resultsObj (months are nested in every year)
    posts.forEach((post)=> {
            let date = new Date(Number(post.date));
            if (!resultObj[date.getFullYear()]) {
                resultObj[date.getFullYear()] = {
                    ['months']: {
                        [date.getMonth()]: 1
                    }
                }
            } else {
                resultObj[date.getFullYear()]['months'][date.getMonth()] ?
                    resultObj[date.getFullYear()]['months'][date.getMonth()] =
                        resultObj[date.getFullYear()]['months'][date.getMonth()] + 1 :
                    resultObj[date.getFullYear()]['months'][date.getMonth()] = 1;
            }
        }
    );

    //turning the result object into a [year,[[month:count]]] array
    //needed in order to create components out of this data (can't use object itiration in JSX)
    _.forOwn(resultObj, (months, year) => {
        let monthsArray = [];
        _.forOwn(months['months'], (count, month)=> {
            monthsArray.push([month, count]
            );
        });
        //sorting month array from newest to oldest
        monthsArray.sort((monthA, monthB)=> Number(monthA[0]) < Number(monthB[0]));
        resultArr.push([year, monthsArray]);
    });
    //sorting year array from newest to oldest
    return resultArr.sort((yearA, yearB)=> Number(yearA[0]) < Number(yearB[0]));
};

