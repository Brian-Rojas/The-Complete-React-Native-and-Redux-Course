import { combineReducers } from 'redux';
import LibraryReducer from './LibrayReducer';

export default combineReducers({
    libraries: LibraryReducer
});
