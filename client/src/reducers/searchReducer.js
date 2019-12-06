import { 
    CHANGE_SEARCHFIELD
 } from '../actions/types';

const initialStateSearch = {
    searchField: '',
}

export default function(state=initialStateSearch, action) {
    switch(action.type) {
        case CHANGE_SEARCHFIELD:
            return { ...state, searchField: action.payload}
        default:
            return state;
    }
} 
