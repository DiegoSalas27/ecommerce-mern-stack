import { 
    CHANGE_SEARCHFIELD,
 } from './types';

 export const setSearchField = (text) => dispatch => {
    dispatch({
        type: CHANGE_SEARCHFIELD,
        payload: text
    })
};