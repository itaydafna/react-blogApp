export const FILTER_POSTS = 'FILTER_POSTS';

export const filterPosts = (posts,filterTerm,page)=> (
{
    type: FILTER_POSTS,
    payload: {
        posts: posts,
        filterTerm: filterTerm,
        page: page
    }
});