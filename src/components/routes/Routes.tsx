import React from 'react'
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom"
// PAGES
import HomePage from '../../pages/home/Home.tsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={<HomePage />} />
        </Route>
    )
)


const Routes:React.FC = () => {
    return <RouterProvider router={router} />
}

export default Routes