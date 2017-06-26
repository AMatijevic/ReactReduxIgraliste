import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, browserHistory } from 'react-router-dom'
//import { AppContainer } from "react-hot-loader";
//import App from "./components/App";
import { App } from "./components/App";
import routes from './components/routes'

ReactDOM.render(
    //<AppContainer>
        <App />,
    //</AppContainer>,
    document.getElementById("app")
);

//ReactDOM.render(
//    <Router history={browserHistory} routes={routes}></Router>,
//    document.getElementById("app")
//);