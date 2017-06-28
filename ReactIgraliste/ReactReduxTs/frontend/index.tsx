import * as React from "react";
import * as ReactDOM from "react-dom";
//import { Router, browserHistory } from 'react-router-dom'
//import { AppContainer } from "react-hot-loader";
//import App from "./components/App";
import {
    BrowserRouter as Router,
    Route,
    Link,
    IndexRoute
} from 'react-router-dom'
import { App } from "./components/App";
//import routes from './components/routes'
//import HomePage from './components/home/HomePage'
//import AboutPage from './components/about/AboutPage'

//ReactDOM.render(
//    //<AppContainer>
//        <App />,
//    //</AppContainer>,
//    document.getElementById("app")
//);

ReactDOM.render(
    //<Router>
    //    <Route path="/" component={App} />
    //</Router>,
    <Router>
        <App />
    </Router>,
    document.getElementById("app")
);