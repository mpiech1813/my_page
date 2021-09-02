import type from './types';

import projectsReducers from './components/Projects/projectReducer';

const rootReducer = combineReducers({
    projects: projectsReducers,
});

export default rootReducer;
