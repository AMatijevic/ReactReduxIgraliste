import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    //short hand property name - tako se zove kad ne definiras sve kao
    //courses: courses
    courses
});

export default rootReducer;