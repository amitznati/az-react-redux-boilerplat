import VisibleToDoListApi from './api/VisibleToDoListApi';
import VisibleToDoListReducer from './api/VisibleToDoListReducer';
import VisibleToDoListConfig from './api/VisibleToDoListConfig';
import VisibleToDoListComponent from './component/VisibleToDoList.component';

export const widget = {
	api: VisibleToDoListApi,
	reducer: VisibleToDoListReducer,
	config: VisibleToDoListConfig,
	connectedWidget: VisibleToDoListComponent
};

export default widget;
