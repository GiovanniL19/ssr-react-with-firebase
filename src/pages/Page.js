import React from 'react'
import { Helmet } from 'react-helmet'
import { Router, Route, Switch } from 'react-router'

class Page extends React.Component {

    render() {
        const { data, location } = this.props
        
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Page</title>
                    <meta name="description" content="Page page" />
                    <link rel="canonical" href="http://example.com" />
                </Helmet>
                Current Path: {location.pathname}

                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
            </div>
        )
    }
}

export default Page