
import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import RRM from './ReactRouterMenu'    // from 'react-router-menu'
import Page from './Page'
import Status from './Status'

// Declare the routes
const mtree = {
  title: 'App',
  path: '/',
  component: App,
  childRoutes: [
    { title: 'Home',   path: '/home',    component: () => <div>Home</div> },
    { title: 'About',  path: '/about',   component: () => <div>About</div> },
    { title: 'Info',   path: '/info',    component: () => <Page url='Info.md' /> },
    { title: 'Server', path: '/server',  component: () => <Status /> },
    {
      title: 'Help',
      childRoutes: [
        { title: 'FAQ', path: '/faq', component: () => <div>FAQ</div> },
        { title: 'Contact', path: '/contact', component: () => <div>Contact</div> }
      ]
    }
  ]
}


// assumes menu tree is not changing
const MyMenu = RRM.createMenu(mtree)
const myRoutes = RRM.createRoutes(mtree);
// debugger;

// Create a ReactRouterMenu
function App ({ children }) {
  return (
    <div>
      <MyMenu mode='horizontal' />
      <div>
        {children}
      </div>
      { myRoutes }
    </div>
  )
}

const mountNode = document.getElementById('root')

// Render the router
// v3   <Router routes={routes}>
render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), mountNode)
