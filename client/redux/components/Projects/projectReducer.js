import types from '../../types';

const initialState = {
    visible: false,
};

const projectsReducers = (state = initialState, action) => {
    if (action.type === types.PROJECTS_VISIBLE) {
        state = action.visible;
    }
    return state;
};

export default projectsReducers;
