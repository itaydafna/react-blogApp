export const GET_ACTIVE_POSTS = 'GET_ACTIVE_POSTS';


export const getActivePosts = (posts,page)=> ({
    type: GET_ACTIVE_POSTS,
    payload: {
        posts: posts,
        page: page
    }
});
