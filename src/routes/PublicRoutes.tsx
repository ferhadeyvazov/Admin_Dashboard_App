import React from 'react'
import {
    Navigate,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom'
// Pages
import LoginPage from "../pages/auth/LoginPage"
import RegisterPage from "../pages/auth/RegisterPage"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={<Navigate to={"login"} />} />
            <Route path="/login">
                <Route index element={<LoginPage />} />
            </Route>
            <Route path="/register">
                <Route index element={<RegisterPage />} />
            </Route>
            <Route path='*' element={<Navigate to={'login'} />} />
        </Route>
    )
)

const PublicRoutes: React.FC = () => {
    return <RouterProvider router={router} />
}

export default PublicRoutes