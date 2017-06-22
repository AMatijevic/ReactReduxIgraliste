import * as React from "react";

interface IHeaderProps {
    compiler: string;
    framework: string;
}
//Function component
const Header = (props: IHeaderProps) => {
    return (<h1> Hello from {props.compiler} and {props.framework}! </h1>);
}

export default Header;