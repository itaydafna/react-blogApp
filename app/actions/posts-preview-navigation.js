export const SHOW_OLDER_POSTS = 'SHOW_OLDER_POSTS';
export const SHOW_NEWER_POSTS = 'SHOW_NEWER_POSTS';

export const showOlderPosts = (posts,page)=> ({
    type: SHOW_OLDER_POSTS,
    payload: {
        posts: posts,
        page: page
    }
});


export const showNewerPosts = (posts,page)=> ({
    type: SHOW_NEWER_POSTS,
    payload: {
        posts: posts,
        page: page
    }
});
