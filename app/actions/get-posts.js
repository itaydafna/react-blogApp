import data from '../../data/posts.json';

export const GET_POSTS = 'GET_POSTS';

export const getPosts = () => ({
    type: GET_POSTS,
    payload: data
    }
);


