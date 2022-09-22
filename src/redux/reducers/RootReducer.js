import { combineReducers } from "redux";

import initReducer from './init';
import searchReducer from './search';
import selectionReducer from './selection';

const RootReducer = combineReducers({
	init: initReducer,
	search: searchReducer,
	selection: selectionReducer
})

export default RootReducer