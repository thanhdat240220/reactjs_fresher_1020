import { combineReducers } from 'redux';
import CartReducer from './cartReducer';
import ProductReducer from './productReducer';

const rootReducer = combineReducers({
    CartReducer,
    ProductReducer
});

export default rootReducer;