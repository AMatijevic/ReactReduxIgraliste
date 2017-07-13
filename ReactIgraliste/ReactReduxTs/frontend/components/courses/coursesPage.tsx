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
            <h4>Add Course</h4>
            <div className ="row">
                <div className="input-field col s6">
                    <input placeholder="Title" id="title" type="text" onChange={this.onTitleChange} value={this.state.course.title} />
                    <label>Title</label>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.onClickSave}>
                    Submit
                </button>
            </div>
           
               


           
        </div>
    }
}

export default CoursesPage;