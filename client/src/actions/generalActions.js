import axios from 'axios';
import { 
    DELETED_ENTITY, 
    CREATED_ENTITY, 
    UPDATED_ENTITY, 
    GET_ERRORS 
} from './types'

export const deleteEntity = (option, id) => async dispatch => {
    let res = '';

    try {
        switch(option) {
            case 'Productos':
                res = await axios.delete(`/api/producto/${id}`); break;
            case 'Categorías':
                res = await axios.delete(`/api/categoria/${id}`); break;
            case 'Usuarios':
                res = await axios.delete(`/api/usuario/${id}`); break;
        }
         
        dispatch({
            type: DELETED_ENTITY,
            payload: res.data.message
        });

    } catch(err) {
        dispatch({
            type: "error",
            payload: err
        })
    }
}

export const createEntity = (option, object) => async dispatch => {
    let res = '';

    try {
        switch(option) {
            case 'Productos':
                res = await axios.post('/api/producto/', object); break;
            case 'Categorías':
                res = await axios.post('/api/categoria/', object); break;
            case 'Usuarios':
                res = await axios.post('/api/usuario/signup', object); break;
        }

        dispatch({
            type: GET_ERRORS,
            payload: {}
        });

        dispatch({
            type: CREATED_ENTITY,
            payload: res.data.message
        });

    } catch(err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data 
        })
    }
}

export const updateEntity = (option, object) => async dispatch => {
    debugger
    let res = '';

    try {
        switch(option) {
            case 'Productos':
                res = await axios.put(`/api/producto/${object.id}`, object); break;
            case 'Categorías':
                res = await axios.put(`/api/categoria/${object.id}`, object); break;
            case 'Usuarios':
                res = await axios.put(`/api/usuario/${object.id}`, object); break;
        }

        dispatch({
            type: GET_ERRORS,
            payload: {}
        });

        dispatch({
            type: UPDATED_ENTITY,
            payload: res.data.message
        });

    } catch(err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data 
        })
    }
}