import React from 'react'
import {
    Navigate,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom"
// PAGES
import Dashboard from "../pages/dashboard/Dashboard"
import Team from '../components/private/team/Team'
import Contacts from '../components/private/contacts/Contacts'
import Bar from '../components/private/bar/Bar'
import Form from '../components/private/form/Form'
import Calendar from '../components/private/calendar/Calendar'
import Faq from '../components/private/faq/Faq'
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={<Dashboard />} />
            <Route path='team' element={<Team />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='bar' element={<Bar />} />
            <Route path='form' element={<Form />} />
            <Route path='calendar' element={<Calendar />} />
            <Route path='faq' element={<Faq />} />
            <Route path='*' element={<Navigate to={"/"} />} />
        </Route>
    )
)


const PrivateRoutes: React.FC = () => {
    return <RouterProvider router={router} />
}

export default PrivateRoutes