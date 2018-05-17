import React from 'react'
import { Helmet } from 'react-helmet'

class App extends React.Component {

    render() {
        const { data, location } = this.props
        
        console.log(data)
        return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{this.props.location}</title>
                <link rel="canonical" href="http://example.com" />
            </Helmet>
            You are on at {this.props.location}
        </div>
        )
    }
}

export default App