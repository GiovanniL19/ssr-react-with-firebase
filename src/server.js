import React from 'react'
import express from 'express'
import path from 'path'

//Styling
import './styles/main.scss'

//App related imports
import App from './App'
import HTML from './client/HTML'
import { Helmet } from 'react-helmet'
import { renderToString } from 'react-dom/server'

//Routing
import { StaticRouter } from 'react-router'
import { renderRoutes } from 'react-router-config'
import Routes from './client/Routes'

// Pages
import Home from './pages/Home'
import Page from './pages/Page'

//Firebase
import * as firebase from 'firebase'
import { config } from '../firebase-config'

//Server configuration
const port = 8080
const app = express()

//Initialise firebase
if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('/styles', express.static(path.join(__dirname, 'styles')))

app.get('*', (req, res) => {
    //Get data from database
    firebase.database().ref('sites/live').once('value', (snapshot) => {
        if (snapshot.val()) {

            const body = renderToString(
                <StaticRouter location={req.url} context={{}}>
                    {/* Pass firebase response into route */}
                    {renderRoutes(Routes(snapshot.val()))}
                </StaticRouter>
            )

            //Get meta data
            const helmet = Helmet.renderStatic()

            // Return static page
            res.send(HTML({ body, helmet }) )
        }
    })
})

//Sets up app
app.listen(port)
console.log(`Serving at http://localhost:${port}`)