export const GET_SINGLE_POST = 'GET_SINGLE_POST';


export const getSinglePost = (posts,postName)=> (
{
    type: GET_SINGLE_POST,
    payload: {
        posts: posts,
        postsName: postName
    }
});
