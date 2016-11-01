import {connect} from 'react-redux';
import {Component} from 'react';
import _ from 'lodash';

import {Filter} from './category';

let PostsFilter = ({posts})=> {

    //function which creates an object of {filter: count} pairs out of all the posts in the store
    //filter is the parameter which the posts are going to be filtered by (category,author);

    const createFiltersMap = (posts,filter)=> {
        let resultObj = {},
            resultArr = [],
        //function which checks if a given filter (instance) exists in the results object - adds it there if it doesn't
        //or adds 1 to its counter if it does
            mapToResultObj = (instance)=> {
            _.has(resultObj, instance) ? resultObj[instance] = resultObj[instance] + 1 : resultObj[instance] = 1
        };

        posts.forEach((post)=> {
         //checking if the filter is an array in order to deal with the 'tags' instance (with forEach)
            (Array.isArray(post[filter]))?
                post[filter].forEach(mapToResultObj):
                    mapToResultObj(post[filter]);
        });
        //turning the result object into an array with [key,value] pairs
        //needed in order to create components out of this data (can't use object itiration in JSX)
        _.forOwn(resultObj, (value, key) => resultArr.push([key, value]));
        //sorting the results array alphabetically based on the the category name
        return resultArr.sort((catA,catB)=> catA[0].toLocaleLowerCase() > catB[0].toLocaleLowerCase());
    };
    



const categoriesMap = createFiltersMap(posts,'tags');
const authorsMap = createFiltersMap(posts,'author');

    console.log(authorsMap);

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
                    count={category[1]}
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
                />)}
        </div>
        <h4>
            <small className="glyphicon glyphicon-time"/>
            Month
        </h4>
        <div className="list-group">
            <div>
              <span className="list-group-item disabled">
                2015
              </span>
                <a href="#" className="list-group-item">
                    <span className="badge">4</span>
                    January
                </a>
            </div>
            <div>
              <span className="list-group-item disabled">
                2014
              </span>
                <a href="#" className="list-group-item">
                    <span className="badge">4</span>
                    December
                </a>
            </div>
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