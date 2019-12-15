import { createSelector } from 'reselect';
import config from './VisibleToDoListConfig';

const sliceSelector = state => state[config.sliceName];

export const getToDosSelector = createSelector(sliceSelector, (slice) => {
	return slice.toDos;
});


export default {
	getToDosSelector
};
