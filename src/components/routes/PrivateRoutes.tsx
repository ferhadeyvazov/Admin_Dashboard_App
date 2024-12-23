import React from 'react'
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom"
// PAGES
import Dashboard from "../../pages/dashboard/Dashboard"
import NotFound from '../../pages/notFound/NotFound'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={<Dashboard />} />
            <Route path='*' element={<NotFound/>} />
        </Route>
    )
)


const PrivateRoutes:React.FC = () => {
    return <RouterProvider router={router} />
}

export default PrivateRoutes