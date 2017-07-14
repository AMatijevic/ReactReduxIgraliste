import { ICourse } from  "../components/courses/coursesPage"

export function createCourse(course: ICourse){
    return {type: 'CREATE_COURSE', course}
}