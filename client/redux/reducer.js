import types from './types';

const initialState = {
    visible: '',
};

const componentReducers = (state = initialState, action) => {
    if (action.type === types.VISIBLE_COMPNENT) {
        state = action.visible;
    }
    return state;
};

export default componentReducers;
