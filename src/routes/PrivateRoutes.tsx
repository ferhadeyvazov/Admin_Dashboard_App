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
import Invoices from '../components/private/invoices/Invoices'
import Pie from '../components/private/pie/Pie'
import Line from '../components/private/line/Line'
import Geography from '../components/private/geography/Geography'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={<Dashboard />} />
            <Route path='team' element={<Team />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='invoices' element={<Invoices />} />
            <Route path='form' element={<Form />} />
            <Route path='calendar' element={<Calendar />} />
            <Route path='faq' element={<Faq />} />
            <Route path='bar' element={<Bar />} />
            <Route path='pie' element={<Pie />} />
            <Route path='line' element={<Line />} />
            <Route path='geography' element={<Geography />} />
            <Route path='*' element={<Navigate to={"/"} />} />
        </Route>
    )
)


const PrivateRoutes: React.FC = () => {
    return <RouterProvider router={router} />
}

export default PrivateRoutes