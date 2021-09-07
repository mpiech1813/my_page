import types from './types';

export const loadComponent = (visible) => {
    return {
        type: types.VISIBLE_COMPNENT,
        visible,
    };
};
