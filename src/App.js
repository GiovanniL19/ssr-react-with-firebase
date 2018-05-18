import React from 'react'
import { renderRoutes } from 'react-router-config'

const App = (props) => {
    return (
        <div>
            <div className="header">
                <h1>SSR React Project with Firebase </h1>
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