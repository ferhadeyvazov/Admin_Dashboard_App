import React from 'react'
import {
    Navigate,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom"
// PAGES
import Dashboard from "../../pages/dashboard/Dashboard"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={<Dashboard />} />
            <Route path='*' element={<Navigate to={"/"} />} />
        </Route>
    )
)


const PrivateRoutes: React.FC = () => {
    return <RouterProvider router={router} />
}

export default PrivateRoutes