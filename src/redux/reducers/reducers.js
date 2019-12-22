import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

const reducers = combineReducers({
    searchedState: searchReducer
})

export default reducers;