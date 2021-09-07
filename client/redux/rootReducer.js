import { combineReducers } from 'redux';
import componentReducers from './reducer';

const rootReducer = combineReducers({
    component: componentReducers,
});

export default rootReducer;
