import React from 'react'
import { Helmet } from 'react-helmet'
import { Router, Route, Switch } from 'react-router'

class Home extends React.Component {

    render() {
        const { data, location } = this.props

        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home</title>
                    <meta name="description" content="Home page" />
                    <link rel="canonical" href="http://example.com" />
                </Helmet>
                You are on at {location.pathname}
            </div>
        )
    }
}

export default Home