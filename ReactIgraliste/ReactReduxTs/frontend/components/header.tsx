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
    //return (
    //    <nav>
    //        <Link to="/">Home</Link>
    //        {" | "}
    //        <Link to="/about">About</Link>
    //        {" | "}
    //        <Link to="/courses">Courses</Link>
    //    </nav>);
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo right">Logo</a>
                <ul id="nav-mobile" className="left">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                </ul>
            </div>
        </nav>
        
        )
}
export default Header;
