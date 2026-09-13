import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { RootRoute } from './__root'
import { Route as IndexRoute } from './index'

const routeTree = RootRoute.addChildren([IndexRoute])
const router = createRouter({ routeTree })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
