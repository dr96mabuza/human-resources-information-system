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
import CreateAddress from './components/addresses/addressCreate.jsx'
import CreateCompensation from './components/compensations/compensationCreate.jsx'
import CreateEmploymentDetails from './components/jobDetails/CreateJobDetails.jsx'
import CreateLeaveDetails from './components/leaves/CreateLeaveDetails.jsx'
import CreateDocument from './components/documents/CreateDocuments.jsx'
import CreateContact from './components/contacts/createContact.jsx'

const router = createBrowserRouter([
  {
    // Home path
    path: "/",
    element: <App />
  },
  {
    // display all employees list
    path: "/employees",
    element: <Employee />
  },
  {
    // update employee by id
    path: "/employee/:id/update",
    element: <PersonalInfoEditForm />
  },
  {
    // display all contact information for all employees
    path: "/contacts",
    element: <Contacts />
  },
  {
    // update employee contact detail
    path: "/contact/:id/update",
    element: <ContactEditForm />
  },
  {
    path: "/contact/:employeeId/create",
    element: <CreateContact />
  },
  {
    // display all employee documents 
    path: "/documents",
    element: <Documents />
  },
  {
    // update employee documents
    path: "/document/:id/update",
    element: <DocumentEditForm />
  },
  {
    path: "/document/:employeeId/create",
    element: <CreateDocument />
  },
  {
    // go to employees leave details page
    path: "/leaves",
    element: <Leave />
  },
  {
    path: "/leave/:employeeId/create",
    element: <CreateLeaveDetails />
  },
  {
    // display all employment details
    path: "/employmentdetails",
    element: <EmployementDetails />
  },
  {
    // update employee job details
    path: "/employmentdetail/:id/update",
    element: <JobInfoEditForm />
  },
  {
    path: "/employmentdetail/:employeeId/create",
    element: <CreateEmploymentDetails />
  },
  {
    // create new employee
    path: "/employee/create",
    element: <CreateEmployee />
  },
  {
    // display all employee address information
    path: "/addresses",
    element: <Addresses />
  },
  {
    // update employee address
    path: "/address/:id/update",
    element: <AddressEditForm />
  },
  {
    // create employee address 
    path: "/address/:employeeId/create",
    element: <CreateAddress />
  },
  {
    // display all payroll packages
    path: "/compensations",
    element: <Compensations />
  },
  {
    // update compensation package
    path: "/compensation/:id/update",
    element: <CompensationsEditForm />
  },
  {
    path: "/compensation/:employeeId/create",
    element: <CreateCompensation />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
