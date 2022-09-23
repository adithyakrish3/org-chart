import { combineReducers } from "redux";

import initReducer from './init';
import searchReducer from './search';
import selectionReducer from './selection';
import alterReducer from './alter';

const RootReducer = combineReducers({
	init: initReducer,
	search: searchReducer,
	selection: selectionReducer,
	alter: alterReducer
})

export default RootReducer