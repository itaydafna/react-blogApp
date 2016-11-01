import {connect} from 'react-redux';
import {Component} from 'react';
import _ from 'lodash';

import {Filter} from './filter';
import {Year} from './year';

let PostsFilter = ({posts})=> {

        //function which creates an object of {filter: count} pairs out of all the posts in the store
        //filter is the parameter which the posts are going to be filtered by (category,author);

        const createFiltersMap = (posts, filter)=> {
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

        const createDateMap = (posts) => {
            let resultObj = {},
                resultArr = [];

            //mapping years in and months in resultsObj (months are nested in every year)
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
                    console.log('month: ', month);
                    console.log('count: ', count);

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

        const categoriesMap = createFiltersMap(posts, 'tags');
        const authorsMap = createFiltersMap(posts, 'author');
        const yearMap = createDateMap(posts);
        console.log(yearMap);


        return (
            <div className="well">
                <h3>Filter Posts</h3>
                <div className="list-group">
                    <a href="#" className="list-group-item active">
                        <span className="badge">{posts.length}</span>
                        Show All Posts
                    </a>
                </div>
                <h4>
                    <small className="glyphicon glyphicon-tag"/>
                    Category
                </h4>
                <div className="list-group">
                    {categoriesMap.map((category)=>
                        <Filter
                            key={category[0]}
                            category={category[0]}
                            query = {`?category=${category[0].toLowerCase()}`}

                        />)}
                </div>
                <h4>
                    <small className="glyphicon glyphicon-user"/>
                    Author
                </h4>
                <div className="list-group">
                    {authorsMap.map((category)=>
                        <Filter
                            key={category[0]}
                            category={category[0]}
                            count={category[1]}
                            query = {`?author=${category[0].replace(/\s+/g, '-').toLowerCase()}`}
                        />)}
                </div>
                <h4>
                    <small className="glyphicon glyphicon-time"/>
                    Month
                </h4>
                <div className="list-group">
                    {/* years go here */}
                    {yearMap.map((year)=>
                        <Year
                        key = {year[0]}
                        year = {year[0]}
                        months = {year[1]}
                        />)
                    }
                </div>
            </div>

        )
    }
    ;

const mapStateToProps = (state) => ({
    posts: state.posts
});


PostsFilter = connect(
    mapStateToProps
)(PostsFilter);


export default PostsFilter;