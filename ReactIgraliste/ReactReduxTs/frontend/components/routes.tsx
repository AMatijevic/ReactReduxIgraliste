import * as React from 'React'
import {
    BrowserRouter as Router,
    Route,
    Link,
    IndexRoute
} from 'react-router-dom'
import App from './app'
import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}></IndexRoute>
        <Route path="about" component={AboutPage}></Route>
    </Route>
);



