import type from './types';

import componentReducers from './reducer';

const rootReducer = combineReducers({
    component: componentReducers,
});

export default rootReducer;
