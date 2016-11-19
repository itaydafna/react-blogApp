export const post = (state = {}, action) => {
    switch(action.type){
        case 'ADD_NEW_POST':
            return {
                ...action.newPost
            };
    }
};
