import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'

const App = (props) => {
    return (
        <div>
            <div className="header">
                <h1>SSR React Project with Firebase </h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/page">Page</Link></li>
                    </ul>
                </nav>
            </div>
            
            <div className="content">
                {renderRoutes(props.route.routes)}
            </div>

            <div className="footer">
                <small>2018</small>
            </div>
        </div>
    )
}

export default App