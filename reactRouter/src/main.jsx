import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Home, About, Contact, Github, User } from './components'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router'
import { githubInfoLoader } from './Functions.js'

// const router = createBrowserRouter([
  // {
    // path: '/',
    // element: <App />,
    // children: [
      // {
        // path: '',
        // element: <Home />
      // },
      // {
        // path: 'about',
        // element: <About />
      // },
      // {
        // path: 'contact',
        // element: <Contact />
      // }
    // ]
  // }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route loader={githubInfoLoader} path='github' element={<Github />} />
      <Route path='user/:userId' element={<User />}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
