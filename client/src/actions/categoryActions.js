import { 
    FETCHED_CATEGORIES,
    GET_ERRORS
} from "./types";
import axios from "axios";

export const getCategories = () => async dispatch => {
    debugger
    try {
        const res = await axios.get("/api/categoria");

        dispatch({
            type: FETCHED_CATEGORIES,
            payload: res.data.categorias
        });

    } catch (error) {
        dispatch({  
            type: GET_ERRORS,
            payload: error.response.data    
        });
    }
}

