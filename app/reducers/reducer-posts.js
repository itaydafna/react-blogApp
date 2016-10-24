import visiblePreviews from  './reducer-visible-previews'
export const posts = (state = [], action) => {
    switch (action.type){
        case 'SHOW_OLDER_POSTS':
            visiblePreviews(undefined,{
                type: action.type,
                posts: state
            })

    }
    return state;
};


