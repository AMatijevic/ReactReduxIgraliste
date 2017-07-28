import { Action, Reducer } from 'redux';
import { CoursesState } from "../store/configureStore";
import { CourseAction } from "../actions/courseAction";

//const courseReducer = (state = [], action) => {
//    switch (action.type) {
//        case 'CREATE_COURSE':
//            //state.push(action.course);
//            //return state;
//            return [...state, Object.assign({}, action.course)];
//        default:
//            return state;
//    }
//}

//export default courseReducer;

const reducer: Reducer<CoursesState> = (state: CoursesState, action: CourseAction) => {
    switch (action.type) {
        case 'CREATE_COURSE':
            //state.push(action.course);
            //return state;
            //[...state, Object.assign({}, action.payload)];
            //return {
            //    courses: [...state.courses, Object.assign({}, action.payload)]
            //};
            //console.log("Reducer is working");
            //console.log(action);
            //console.log(action.payload);

            //Kad ovo sa datom nisam napravio imao sam problem jer mi je bio store povezan direktno sa stateom sa view-a sa komponente
            //sto je bilo krivo znaci morao sam i za to naraviti novi objekt
            let data = Object.assign({}, action.payload);
            return Object.assign({}, state, { courses: [...state.courses, data] });
            //console.log("State");
            //console.log(state);
            //console.log(bla);
            //return bla;
        default:
            console.log("Default");
            return state || { courses: [] };
            //const exhaustiveCheck: never = action;
    }
}
export default reducer;


