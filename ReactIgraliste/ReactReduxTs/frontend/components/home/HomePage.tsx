import * as React from 'react'
import {
    //BrowserRouter as Router,
    //Route,
    Link
} from 'react-router-dom'

class HomePage extends React.Component<undefined, undefined>{
    render() {
        return <div>
            <h1>Pluralsight administration</h1>
            <Link to="about">Learn more</Link>
        </div>
    }
}

export default HomePage;