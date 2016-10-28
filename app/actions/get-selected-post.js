export const GET_SELECTED_POST = 'GET_SELECTED_POST';


export const getSelectedPost = (posts,postTitle)=> (
{
    type: GET_SELECTED_POST,
    payload: {
        posts: posts,
        postTitle: postTitle
    }
});
