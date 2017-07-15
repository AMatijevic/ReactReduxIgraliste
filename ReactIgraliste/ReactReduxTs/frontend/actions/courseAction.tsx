import { ICourse } from  "../components/courses/coursesPage"
//interface Action {
//    type: any
//    data: any
//}
export type Action = {
    type: 'CREATE_COURSE',
    course: ICourse,
}
export const createCourse = (course: ICourse): Action => {
    return { type: 'CREATE_COURSE', course }
}