import { DELETED_ENTITY, CREATED_ENTITY, UPDATED_ENTITY } from '../actions/types';

const initialState = {
    response: ''
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case DELETED_ENTITY:
            return { ...state, response: actions.payload };
        case CREATED_ENTITY:
            return { ...state, response: actions.payload };
        case UPDATED_ENTITY:
            return { ...state, response: actions.payload };
        default:
            return state;
    }
}