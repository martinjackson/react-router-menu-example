
import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import RRM from './ReactRouterMenu'    // from 'react-router-menu'
import Page from './Page'
import Status from './Status'
import HelloWorld from './HelloWorld.tsx'
import About from './About'

import './index.css'

// import './indx.css'
 
// Declare the routes
const mtree = {
  title: 'App',
  path: '/',
  component: App,
  childRoutes: [
    { title: 'Home',       path: '/home',       component: () => <div>Home</div> },
    { title: 'About',      path: '/about',      component: () => <About /> },
    { title: 'Info',       path: '/info',       component: () => <Page url='Info.md' /> },
    { title: 'API',        path: '/server',     component: () => <Status /> },
    { title: 'TypeScript', path: '/typescript', component: () => <HelloWorld name='World'/> },
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
