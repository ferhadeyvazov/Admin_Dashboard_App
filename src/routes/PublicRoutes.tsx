import React, { lazy, Suspense } from 'react'
import {
    Navigate,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom'
import Loading from '../features/Loading';
// Pages
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("../pages/auth/RegisterPage"));

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={<Navigate to={"login"} />} />
            <Route path="/login">
                <Route index element={<Suspense fallback={<Loading />}><LoginPage /></Suspense>} />
            </Route>
            <Route path="/register">
                <Route index element={<Suspense fallback={<Loading />}><RegisterPage /></Suspense>} />
            </Route>
            <Route path='*' element={<Navigate to={'login'} />} />
        </Route>
    )
)

const PublicRoutes: React.FC = () => {
    return <RouterProvider router={router} />
}

export default PublicRoutes