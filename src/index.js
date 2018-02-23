// TODO: child components are not showing in the non-menu area

// #FFFF
// #3cb371
// rgba(100,100,0,0.5)
// rgb(133,153,0)
// Tomato
// DodgerBlue
// MediumSeaGreen
// Violet
// green

import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

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
  <BrowserRouter routes={routes}>
    <App />
  </BrowserRouter>
), mountNode)
