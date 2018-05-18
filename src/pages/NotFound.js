import React from 'react'
import { Helmet } from 'react-helmet'
import { Router, Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'

class NotFound extends React.Component {

    render() {
        const { data, location } = this.props
        
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Page Not Found 404</title>
                    <meta name="description" content="Page not found, ERROR: 404" />
                </Helmet>
                <h2>Page Not Found</h2>
                <p>Sorry, the page you are looking for does not exist</p>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default NotFound