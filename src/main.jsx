import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Employee from './components/employee/Employee.jsx'
import Contacts from './components/contacts/Contacts.jsx'
import Documents from './components/documents/Documents.jsx'
import Leave from './components/leaves/Leave.jsx'
import EmployementDetails from './components/jobDetails/EmploymentDetails.jsx'
import Addresses from './components/addresses/Addresses.jsx'
import Compensations from './components/compensations/Compensations.jsx'
import CompensationsEditForm from "./components/compensations/CompensationEditForm.jsx"
import AddressEditForm from './components/addresses/addressEditForm.jsx'
import JobInfoEditForm from './components/jobDetails/JobDetailsEditForm.jsx'
import DocumentEditForm from './components/documents/DocumentEditForm.jsx'
import ContactEditForm from './components/contacts/ContactEditForm.jsx'
import PersonalInfoEditForm from './components/employee/EmployeeEditForm.jsx'
import CreateEmployee from './components/employee/EmployeeCreate.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/employees",
    element: <Employee />
  },
  {
    path: "/employee/:id/update",
    element: <PersonalInfoEditForm />
  },
  {
    path: "/contacts",
    element: <Contacts />
  },
  {
    path: "/contact/:id/update",
    element: <ContactEditForm />
  },
  {
    path: "/documents",
    element: <Documents />
  },
  {
    path: "/document/:id/update",
    element: <DocumentEditForm />
  },
  {
    path: "/leaves",
    element: <Leave />
  },
  {
    path: "/employmentdetails",
    element: <EmployementDetails />
  },
  {
    path: "/employmentdetail/:id/update",
    element: <JobInfoEditForm />
  },
  {
    path: "/employee/create",
    element: <CreateEmployee />
  },
  {
    path: "/addresses",
    element: <Addresses />
  },
  {
    path: "/address/:id/update",
    element: <AddressEditForm />
  },
  {
    path: "/compensations",
    element: <Compensations />
  },
  {
    path: "/compensation/:id/update",
    element: <CompensationsEditForm />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
