import { ICourse } from  "../components/courses/coursesPage"
//interface Action {
//    type: any
//    data: any
//}

//Ovo moze biti genericni tip i onda mozes imati type and payload
//i taj payload ce biti objekt tipa T koji si definirao kao genericni tip

///https://stackoverflow.com/questions/44079820/what-is-export-type-in-typescript
//export type Action = {
//    type: 'CREATE_COURSE',
//    course: ICourse,
//}


export interface CourseAction {
    type: string,//type: 'CREATE_COURSE',
    payload: any
}

//Action creator
//export const createCourse = (course: ICourse): CreateCourseAction => {
//    return { type: 'CREATE_COURSE', course }
//}

export const actionCreators = {
    createCourse: (course: ICourse): CourseAction => {
        let result: CourseAction = { type: 'CREATE_COURSE', payload: course }
        return result;
    }
}
