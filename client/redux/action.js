import types from './types';

export const laodComponent = (visible) => {
    return {
        type: types.VISIBLE_COMPNENT,
        visible,
    };
};
