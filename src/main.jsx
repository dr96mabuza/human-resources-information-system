import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Employee from "./components/employee/Employee.jsx";
import Contacts from "./components/contacts/Contacts.jsx";
import Documents from "./components/documents/Documents.jsx";
import Leave from "./components/leaves/Leave.jsx";
import EmployementDetails from "./components/jobDetails/EmploymentDetails.jsx";
import Addresses from "./components/addresses/Addresses.jsx";
import Compensations from "./components/compensations/Compensations.jsx";
import CompensationsEditForm from "./components/compensations/CompensationEditForm.jsx";
import AddressEditForm from "./components/addresses/addressEditForm.jsx";
import JobInfoEditForm from "./components/jobDetails/JobDetailsEditForm.jsx";
import DocumentEditForm from "./components/documents/DocumentEditForm.jsx";
import ContactEditForm from "./components/contacts/ContactEditForm.jsx";
import PersonalInfoEditForm from "./components/employee/EmployeeEditForm.jsx";
import CreateEmployee from "./components/employee/EmployeeCreate.jsx";
import CreateAddress from "./components/addresses/addressCreate.jsx";
import CreateCompensation from "./components/compensations/compensationCreate.jsx";
import CreateEmploymentDetails from "./components/jobDetails/CreateJobDetails.jsx";
import CreateLeaveDetails from "./components/leaves/CreateLeaveDetails.jsx";
import CreateDocument from "./components/documents/CreateDocuments.jsx";
import CreateContact from "./components/contacts/createContact.jsx";
import Nav from "./components/Nav.jsx";
import Header from "./components/Header.jsx";
import PageNotFound from "./components/404.jsx";
import Login from "./components/Login.jsx";
import Signup from "./Signup.jsx";
import Search from "./components/Search.jsx";

const getRequest = async (route) => {
  const res = await fetch(route, { method: "GET", mode: "cors" });
  const data = await res.json();
  const results = await data.result;
  return results;
};

const postRequest = async (route, data) => {
  const response = await fetch(route, {
    method: "post",
    mode: "cors",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

const getEmployeeNamesList = async (data) => {
  const employeeNames = await Promise.all(
    data.map(async (item) => {
      const results = await getRequest(
        `https://hris-qp6t.onrender.com/employee/${Object.keys(item).includes("employeeId") ? item.employeeId : item.employee_id}`,
      );
      return `${results[0].firstName} ${results[0].lastName}`;
    }),
  );

  return employeeNames;
};

const fetchEmployees = async () => {
  const employees = await getRequest(
    "https://hris-qp6t.onrender.com/employees",
  );
  const result = await Promise.all(
    employees.map((employee) => {
      return {
        id: employee.id,
        fullname: `${employee.firstName} ${employee.lastName}`,
      };
    }),
  );
  // console.log(result);
  return result;
};

const parentRoutes = [
  {
    // Home path
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/search",
    element: <Search nav={<Nav />} />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    // display all employees list
    path: "employees",
    element: (
      <Employee
        nav={<Nav location={"/employees"} />}
        getRequest={getRequest}
        postRequest={postRequest}
      />
    ),
  },
  {
    // display all contact information for all employees
    path: "contacts",
    element: (
      <Contacts
        nav={<Nav location={"/contacts"} />}
        getRequest={getRequest}
        postRequest={postRequest}
        getEmployeeNamesList={getEmployeeNamesList}
      />
    ),
  },
  {
    // display all employee documents
    path: "documents",
    element: (
      <Documents
        nav={<Nav location={"/documents"} />}
        getRequest={getRequest}
        postRequest={postRequest}
        getEmployeeNamesList={getEmployeeNamesList}
      />
    ),
  },
  {
    // go to employees leave details page
    path: "leaves",
    element: (
      <Leave
        nav={<Nav location={"/leaves"} />}
        getRequest={getRequest}
        getEmployeeNamesList={getEmployeeNamesList}
      />
    ),
  },
  {
    // display all employee address information
    path: "addresses",
    element: (
      <Addresses
        nav={<Nav location={"/addresses"} />}
        getRequest={getRequest}
        postRequest={postRequest}
        getEmployeeNamesList={getEmployeeNamesList}
      />
    ),
  },
  {
    // display all employment details
    path: "employmentdetails",
    element: (
      <EmployementDetails
        nav={<Nav location={"/employmentdetails"} />}
        getRequest={getRequest}
        getEmployeeNamesList={getEmployeeNamesList}
      />
    ),
  },
  {
    // display all payroll packages
    path: "compensations",
    element: (
      <Compensations
        nav={<Nav location={"/compensations"} />}
        getRequest={getRequest}
        getEmployeeNamesList={getEmployeeNamesList}
      />
    ),
  },
];

const createRoutes = [
  {
    path: "contact/create",
    element: (
      <CreateContact
        nav={<Nav location={"/contacts"} />}
        postRequest={postRequest}
        fetchEmployees={fetchEmployees}
      />
    ),
  },
  {
    path: "document/create",
    element: (
      <CreateDocument
        nav={<Nav location={"/documents"} />}
        postRequest={postRequest}
        fetchEmployees={fetchEmployees}
      />
    ),
  },
  {
    path: "leave/create",
    element: (
      <CreateLeaveDetails
        nav={<Nav location={"/leaves"} />}
        postRequest={postRequest}
        fetchEmployees={fetchEmployees}
      />
    ),
  },
  {
    path: "employmentdetail/create",
    element: (
      <CreateEmploymentDetails
        nav={<Nav location={"/emplotmentdetails"} />}
        postRequest={postRequest}
        fetchEmployees={fetchEmployees}
      />
    ),
  },
  {
    // create new employee
    path: "employee/create",
    element: (
      <CreateEmployee
        nav={<Nav location={"/employees"} />}
        postRequest={postRequest}
      />
    ),
  },
  {
    // create employee address
    path: "address/create",
    element: (
      <CreateAddress
        nav={<Nav location={"/addresses"} />}
        postRequest={postRequest}
        fetchEmployees={fetchEmployees}
      />
    ),
  },
  {
    path: "compensation/create",
    element: (
      <CreateCompensation
        nav={<Nav location={"/compensations"} />}
        postRequest={postRequest}
        fetchEmployees={fetchEmployees}
      />
    ),
  },
];

const updateRoutes = [
  {
    // update employee by id
    path: "employee/:id/update",
    element: (
      <PersonalInfoEditForm
        nav={<Nav location={"/employees"} />}
        getRequest={getRequest}
        postRequest={postRequest}
      />
    ),
  },
  {
    // update employee contact detail
    path: "contact/:id/update",
    element: (
      <ContactEditForm
        nav={<Nav location={"/contacts"} />}
        getRequest={getRequest}
        postRequest={postRequest}
      />
    ),
  },
  {
    // update employee documents
    path: "document/:id/update",
    element: (
      <DocumentEditForm
        nav={<Nav location={"/documents"} />}
        getRequest={getRequest}
        postRequest={postRequest}
      />
    ),
  },
  {
    // update employee job details
    path: "employmentdetail/:id/update",
    element: (
      <JobInfoEditForm
        nav={<Nav location={"/employmentdetails"} />}
        getRequest={getRequest}
        postRequest={postRequest}
      />
    ),
  },
  {
    // update employee address
    path: "address/:id/update",
    element: (
      <AddressEditForm
        nav={<Nav location={"/addresses"} />}
        getRequest={getRequest}
        postRequest={postRequest}
      />
    ),
  },
  {
    // update compensation package
    path: "compensation/:id/update",
    element: (
      <CompensationsEditForm
        nav={<Nav location={"/compensations"} />}
        getRequest={getRequest}
        postRequest={postRequest}
      />
    ),
  },
];

const router = createBrowserRouter(
  parentRoutes.concat(createRoutes, updateRoutes),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
