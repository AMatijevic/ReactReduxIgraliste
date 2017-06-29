import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    IndexRoute,
    Switch
} from 'react-router-dom'


interface IHeaderProps {
    compiler?: string;
    framework?: string;
}
//Function component
const Header = (props: IHeaderProps) => {
    //return (<h1> Hello from {props.compiler} and {props.framework}! </h1>);
    return (
        <nav>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/about">About</Link>
            {" | "}
            <Link to="/courses">Courses</Link>
        </nav>);
}
export default Header;
