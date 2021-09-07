import types from './types';

export const laodedComponent = (visible) => {
    return {
        type: types.VISIBLE_COMPNENT,
        visible,
    };
};
