import App from './App'

// Pages
import Home from '../pages/Home'
import Page from '../pages/Page'

const Routes = (data) => [
    {
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home,
                data: data
            },
            {
                path: '/page',
                component: Page,
                data: data
            }
        ]
    }
]

export default Routes