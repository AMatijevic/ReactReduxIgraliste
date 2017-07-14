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
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
//import routes from './components/routes'
//import HomePage from './components/home/HomePage'
//import AboutPage from './components/about/AboutPage'

//ReactDOM.render(
//    //<AppContainer>
//        <App />,
//    //</AppContainer>,
//    document.getElementById("app")
//);
const store = configureStore();
ReactDOM.render(
    //<Router>
    //    <Route path="/" component={App} />
    //</Router>,
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("app")
);