import * as React from 'react'
//import {
//    BrowserRouter as Router,
//    Route,
//    Link
//} from 'react-router-dom'
interface ICourseProps {
}
interface ICourseState {
    course: ICourse;
}
interface ICourse {
    title: string;
}

class CoursesPage extends React.Component<ICourseProps, ICourseState>{
    constructor(props) {
        super(props);
        this.state = {
            course: {
                title:""
            }
        }
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange = (event:React.ChangeEvent<any>) => {
        const course = this.state.course; 
        course.title = event.target.value;
        this.setState({ course: course });
    }

    onClickSave = () => {
        alert(`Saving ${this.state.course.title}`);
    }

    render() {
        return <div>
            <h1>Courses</h1>
            <h2>Add Course</h2>
            <div class="row">
                <div class="input-field col s6">
                    <input placeholder="Title" id="title" type="text" onChange={this.onTitleChange} value={this.state.course.title} />
                    <label for="first_name">First Name</label>
                </div>
            </div>
            <button class="btn waves-effect waves-light" type="submit" name="action" onClick={this.onClickSave}>
                Submit <i class="material-icons right">send</i>
            </button>
               


           
        </div>
    }
}

export default CoursesPage;