import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'



export const router = createBrowserRouter([

  {
    path: "/",
    element:<Home/>
  },
  {
    path: "/reels",
    element:<App/>
  },
  {
    path: "/marketplace",
    element:<App/>
  },
  {
    path: "/groups",
    element: <App/>
  },
  {
    path: "/games",
    element:<App/>,

  },
]

  

 )