import _ from 'lodash'
import {FILTER_POSTS} from '../actions/filter-posts'

const filterPosts = (state = [], action) => {
    switch (action.type){
        case FILTER_POSTS:
            return action.payload.posts.filter((post)=>{
                let filterTerm = action.payload.filterTerm;
               if (
                   _.includes(post.title,filterTerm)||
                   _.includes(post.author,filterTerm)

               ){
                   return post

               }
            });
    }
    return state;
};

export default filterPosts;

