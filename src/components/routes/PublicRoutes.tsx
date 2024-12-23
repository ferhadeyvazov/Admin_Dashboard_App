import React from 'react'
import {
    Navigate,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom'
// Pages
import Login from "../public/login/Login"
import NotFound from '../../pages/notFound/NotFound'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={<Navigate to={"login"} />} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
        </Route>
    )
)

const PublicRoutes: React.FC = () => {
    return <RouterProvider router={router} />
}

export default PublicRoutes