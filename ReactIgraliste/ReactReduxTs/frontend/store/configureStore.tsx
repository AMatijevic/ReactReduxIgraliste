import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { ICourse } from "../components/courses/coursesPage"

//https://stackoverflow.com/questions/44079820/what-is-export-type-in-typescript
//export namespace Store {

//    export type Courses = { value: ICourse[] }

//    export type All = {
//        Courses: Courses
//    }
//}


export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, applyMiddleware(reduxImmutableStateInvariant()));

}