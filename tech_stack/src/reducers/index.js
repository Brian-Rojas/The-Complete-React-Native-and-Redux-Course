import { combineReducers } from 'redux';
import LibraryReducer from './LibrayReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});
