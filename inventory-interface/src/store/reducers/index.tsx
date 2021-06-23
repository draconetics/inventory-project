import { combineReducers } from 'redux';
import {brandReducer} from './brandReducer';
import {productReducer} from './productReducer';

export default combineReducers({
    brandReducer, productReducer
});