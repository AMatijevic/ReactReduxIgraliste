import * as React from 'React'
import {
    BrowserRouter as Router,
    Route,
    Link,
    IndexRoute,
    Switch
} from 'react-router-dom'
import App from './app'
import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage'

export default (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
        </Switch>
    </main>
);



