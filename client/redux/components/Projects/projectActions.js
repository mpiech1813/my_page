import types from '../../types';

export const laodProjects = (visible) => {
    return {
        type: types.PROJECTS_VISIBLE,
        visible,
    };
};
