import types from './types';

// Action
export const loadingComponent = (visible) => {
    return {
        type: types.VISIBLE_COMPONENT,
        visible,
    };
};

// Thunk
export const loadComponent = (name) => {
    return async (dispatch) => {
        try {
            console.log('name from thunk ' + name);
            dispatch(loadingComponent(name));
        } catch (error) {
            console.log('error in the thunk');
        }
    };
};
