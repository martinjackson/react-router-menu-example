import * as React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'

import rrMenu from './ReactRouterMenu'    // from 'react-router-menu'

// Declare the routes
const routes = {
  title: 'App',
  path: '/',
  component: App,
  childRoutes: [
    { title: 'Home', path: '/home', component: () => <div>Home</div> },
    { title: 'About', path: '/about', component: () => <div>About</div> },
    {
      title: 'Help', path: 'help', component: ({ children }) => <div>Help: {children}</div> ,childRoutes: [
        { title: 'FAQ', path: '/faq', component: () => <div>FAQ</div> },
        { title: 'Contact', path: '/contact', component: () => <div>Contact</div> }
      ]
    }
  ]
}

// Create a ReactRouterMenu
function App ({ children }) {
  const MyReactRouterMenu = rrMenu.createReactRouterMenu(routes)
  return (
    <div>
      <MyReactRouterMenu mode='horizontal' />
      <div>
        {children}
      </div>
    </div>
  )
}

const mountNode = document.getElementById('root')

// Render the router
render((
  <HashRouter routes={routes}>
    <App />
  </HashRouter>
), mountNode)
