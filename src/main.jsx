import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Hoppies from './components/Hoppies.jsx'
import Projects from './components/Projects.jsx'
import Contacts from './components/Contacts.jsx'
import { RouterProvider } from 'react-router/dom'

const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      Children:[
        {
          path:"about",
          element:<About/>
        },
        {
          path:"experience",
          element:<Skills/>
        },
        {
          path:"projects",
          element:<Projects/>
        },
        {
          path:"hoppies",
          element:<Hoppies/>
        },
        {
          path:"contact",
          element:<Contacts/>
        }
      ]
      
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
