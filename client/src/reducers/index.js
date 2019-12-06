import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import categoriesReducer from './categoriesReducer';
import searchReducer from './searchReducer';
import securityReducer from './securityReducer';
import generalReducer from './generalReducer';

export default combineReducers ({
    errors: errorsReducer,
    categories: categoriesReducer,
    searchProducts: searchReducer,
    security: securityReducer,
    entity: generalReducer
});