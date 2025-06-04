import React, { lazy, Suspense } from 'react'
import {
    Navigate,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom"
import Loading from '../features/Loading';
// PAGES
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Team = lazy(() => import("../components/private/team/Team"));
const Contacts = lazy(() => import("../components/private/contacts/Contacts"));
const Bar = lazy(() => import("../components/private/bar/Bar"));
const Form = lazy(() => import("../components/private/form/Form"));
const Calendar = lazy(() => import("../components/private/calendar/Calendar"));
const Faq = lazy(() => import("../components/private/faq/Faq"));
const Invoices = lazy(() => import("../components/private/invoices/Invoices"));
const Pie = lazy(() => import("../components/private/pie/Pie"));
const Line = lazy(() => import("../components/private/line/Line"));
const Geography = lazy(() => import("../components/private/geography/Geography"));

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={<Suspense fallback={<Loading />}><Dashboard /></Suspense>} />
            <Route path='team' element={<Suspense fallback={<Loading />}><Team /></Suspense>} />
            <Route path='contacts' element={<Suspense fallback={<Loading />}><Contacts /></Suspense>} />
            <Route path='invoices' element={<Suspense fallback={<Loading />}><Invoices /></Suspense>} />
            <Route path='form' element={<Suspense fallback={<Loading />}><Form /></Suspense>} />
            <Route path='calendar' element={<Suspense fallback={<Loading />}><Calendar /></Suspense>} />
            <Route path='faq' element={<Suspense fallback={<Loading />}><Faq /></Suspense>} />
            <Route path='bar' element={<Suspense fallback={<Loading />}><Bar /></Suspense>} />
            <Route path='pie' element={<Suspense fallback={<Loading />}><Pie /></Suspense>} />
            <Route path='line' element={<Suspense fallback={<Loading />}><Line /></Suspense>} />
            <Route path='geography' element={<Suspense fallback={<Loading />}><Geography /></Suspense>} />
            <Route path='*' element={<Navigate to={"/"} />} />
        </Route>
    )
)


const PrivateRoutes: React.FC = () => {
    return <RouterProvider router={router} />
}

export default PrivateRoutes