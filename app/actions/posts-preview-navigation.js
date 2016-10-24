export const SHOW_OLDER_POSTS = 'SHOW_OLDER_POSTS';
export const SHOW_NEWER_POSTS = 'SHOW_NEWER_POSTS';

export const showOlderPosts = (posts)=> ({
    type: SHOW_OLDER_POSTS,
    posts: posts

});


export const showNewerPosts = (posts)=> ({
    type: SHOW_NEWER_POSTS,
    posts: posts

});
