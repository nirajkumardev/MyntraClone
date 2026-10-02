import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomeDisplay from './routes/HomeDisplay.jsx';
import Bag from './routes/Bag.jsx'
import Myntrastore from './components/store/index.js';
import {Provider} from "react-redux"



const router=createBrowserRouter(
  [
    {
       path:"/",
       element: <App/>,
       children:
       [
          {path:"/",element:<HomeDisplay/>},
          {path:"/bag",element: <Bag/>}
       ]

    }
   
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Myntrastore}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
