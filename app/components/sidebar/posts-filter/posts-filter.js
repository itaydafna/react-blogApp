import {connect} from 'react-redux';
import {Component} from 'react';
import {Link} from 'react-router';

import {Filter} from './filter';
import {Year} from './year';
import {normalizeAuthor, normalizeTag, createFiltersMap, createDateMap} from '../../../assets/UTILS'

//filterTerm is passed as a prop from the url query in order to render the 'show all posts' active state
//it is is an empty string - all posts are shown else - is should be inactive
let PostsFilter = ({posts,filterTerm,pathPrefix})=>{

        const categoriesMap = createFiltersMap(posts, 'tags');
        const authorsMap = createFiltersMap(posts, 'author');
        const yearMap = createDateMap(posts);

        return (
            <div className="well">
                <h3>Filter Posts</h3>
                <div className="list-group">
                    <Link to={pathPrefix}
                       className={filterTerm ? "list-group-item":"list-group-item active"}
                    >
                        <span className="badge">{posts.length}</span>
                        Show All Posts
                    </Link>
                </div>
                <h4>
                    <small className="glyphicon glyphicon-tag"/>
                    Category
                </h4>
                <div className="list-group">
                    {categoriesMap.map((category)=>
                        <Filter
                            pathPrefix = {pathPrefix}
                            key={category[0]}
                            category={category[0]}
                            count={category[1]}
                            queryVar={'category'}
                            queryVal={normalizeTag(category[0])}
                        />)}
                </div>
                <h4>
                    <small className="glyphicon glyphicon-user"/>
                    Author
                </h4>
                <div className="list-group">
                    {authorsMap.map((category)=>
                        <Filter
                            pathPrefix = {pathPrefix}
                            key={category[0]}
                            category={category[0]}
                            count={category[1]}
                            queryVar={'author'}
                            queryVal={normalizeAuthor(category[0])}
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
                            pathPrefix = {pathPrefix}
                            key={year[0]}
                            year={year[0]}
                            months={year[1]}
                        />)
                    }
                </div>
            </div>

        )
};

const mapStateToProps = (state) => ({
    posts: state.posts.arr
});


PostsFilter = connect(
    mapStateToProps
)(PostsFilter);


export default PostsFilter;