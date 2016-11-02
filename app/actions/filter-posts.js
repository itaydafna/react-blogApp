export const FILTER_POSTS = 'FILTER_POSTS';


export const getActivePosts = (posts,filterTerm)=> (
{
    type: FILTER_POSTS,
    payload: {
        posts: posts,
        filterTerm: filterTerm
    }
});