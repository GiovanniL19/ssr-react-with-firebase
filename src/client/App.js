import React from 'react'
import { renderRoutes } from 'react-router-config'

const App = (props) => {
    return (
        <div>
            NAVIGATION BAR HERE
            {renderRoutes(props.route.routes)}
            FOOTER HERE
        </div>
    )
}

export default App