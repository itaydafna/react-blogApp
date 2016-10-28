import {CHANGE_SECTION} from '../actions/change-section'
const activeSection = (state = 'posts', action) => {
    if(action.payload === state){return state}

    switch(action.type) {
        case CHANGE_SECTION:
            switch (action.payload) {
                case 'posts':
                    return 'posts';
                case 'admin':
                    return 'admin';
            }
    }

    return state;
};

export default activeSection;

