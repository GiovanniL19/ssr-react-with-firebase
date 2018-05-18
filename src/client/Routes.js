import App from '../App'

// Pages
import Home from '../pages/Home'
import Page from '../pages/Page'
import NotFound from '../pages/NotFound';

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
            },
            {
                path: '*',
                component: NotFound,
                data: data
            }
        ]
    }
]

export default Routes