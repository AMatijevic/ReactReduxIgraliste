import * as React from 'React'
import {
    BrowserRouter as Router,
    Route,
    Link,
    IndexRoute,
    Switch
} from 'react-router-dom'
//import App from './app'
import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage'
import CoursesPage from './courses/CoursesPage'

const Routes = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/courses' component={CoursesPage} />
            </Switch>
        </main>
    );
}

export default Routes;



