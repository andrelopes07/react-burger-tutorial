import { combineReducers } from 'redux';

import authReducer from './auth';
import burgerBuilderReducer from './burgerBuilder';
import orderReducer from './order';

export default combineReducers({
    auth: authReducer,
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer
});
