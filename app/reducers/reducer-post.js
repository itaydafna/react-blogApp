export const post = (state = {}, action) => {
    switch(action.type){
        case 'ADD_NEW_POST':
            return {
                ...action.newPost
            };
        case 'EDIT_POST':
            return{
                ...state,
                ...action.editedPost
            }
    }
};
