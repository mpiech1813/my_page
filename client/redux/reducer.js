import types from './types';

const initialState = {
    visible: '',
};

const componentReducers = (state = initialState, action) => {
    if (action.type === types.VISIBLE_COMPONENT) {
        state = action.visible;
    } else {
        state = initialState;
    }
    return state;
};

export default componentReducers;
