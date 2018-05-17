import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './client/App'
import Html from './client/Html'
import { Helmet } from 'react-helmet'
import * as firebase from 'firebase'

import { config } from '../firebase-config'

const port = 8080
const server = express()

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

server.get('*', (req, res) => {

    firebase.database().ref('').once('value', (snapshot) => {
        if(snapshot.val()) {
            const body = renderToString(<App location={req.url} data={snapshot.val()} />)
            const helmet = Helmet.renderStatic();

            res.send(
                Html({
                    body,
                    helmet
                })
            )
        }
    })
})

server.listen(port)
console.log(`Serving at http://localhost:${port}`)