import * as React from 'react'
import {
    //BrowserRouter as Router,
    //Route,
    Link
} from 'react-router-dom'

class HomePage extends React.Component<undefined, undefined>{
    render() {
        return <div>
            <h2>Pluralsight administration</h2>
            <div className="row">
                <div className="col s12 m8">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                            <Link to="about">Learn more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default HomePage;