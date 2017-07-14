import * as React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as courseAction from '../../actions/courseAction';
//import {
//    BrowserRouter as Router,
//    Route,
//    Link
//} from 'react-router-dom'
interface ICourseProps {
    courses: any,
    dispatch: Function
}
interface ICourseState {
    course: ICourse;
}
export interface ICourse {
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
        //alert(`Saving ${this.state.course.title}`);
        this.props.dispatch(courseAction.createCourse(this.state.course))
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

const mapStateToProps = (state, ownProps): any => {
    return {
        courses : state.courses
    };
}

//const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
//export default connectedStateAndProps(CoursesPage);

//export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)
export default connect(mapStateToProps)(CoursesPage)

//export default CoursesPage;