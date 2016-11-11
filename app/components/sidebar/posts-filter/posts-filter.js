import {connect} from 'react-redux';
import {Component} from 'react';
import _ from 'lodash';

import {Filter} from './filter';
import {Year} from './year';
import {normalizeAuthor, normalizeTag} from '../../../reducers/reducer-filtered-posts'

class PostsFilter extends Component {

    constructor(props){
        super(props);
    }

    //function which creates an object of {filter: count} pairs out of all the posts in the store
    //filter is the parameter which the posts are going to be filtered by (category,author);

    createFiltersMap(posts, filter) {
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

    createDateMap(posts) {
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

    render() {

        const{posts,currentPage,filterTerm} = this.props;
        const categoriesMap = this.createFiltersMap(posts, 'tags');
        const authorsMap = this.createFiltersMap(posts, 'author');
        const yearMap = this.createDateMap(posts);
        

        const page = currentPage === 1 || !currentPage ? null : currentPage;

        return (
            <div className="well">
                <h3>Filter Posts</h3>
                <div className="list-group">
                    <a href="#"
                       className={filterTerm === ''?"list-group-item active":"list-group-item"}
                    >
                        <span className="badge">{posts.length}</span>
                        Show All Posts
                    </a>
                </div>
                <h4>
                    <small className="glyphicon glyphicon-tag"/>x
                    Category
                </h4>
                <div className="list-group">
                    {categoriesMap.map((category)=>
                        <Filter
                            key={category[0]}
                            category={category[0]}
                            count={category[1]}
                            queryVar={'category'}
                            queryVal={normalizeTag(category[0])}
                            currentPage={page}
                            filterTerm = {filterTerm}
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
                            queryVar={'author'}
                            queryVal={normalizeAuthor(category[0])}
                            currentPage={page}
                            filterTerm = {filterTerm}
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
                            key={year[0]}
                            year={year[0]}
                            months={year[1]}
                            filterTerm = {filterTerm}
                        />)
                    }
                </div>
            </div>

        )
    }
}
;

const mapStateToProps = (state) => ({
    posts: state.posts,
    currentPage: state.visiblePreviews.tracking.currentPage,
    filterTerm: state.filteredPosts.filterTerm
});


PostsFilter = connect(
    mapStateToProps
)(PostsFilter);


export default PostsFilter;