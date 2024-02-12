import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/Hero.jsx";
import "./index.css";
import "./App.css";

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
import Signup from "./components/Signup.jsx";
import Search from "./components/Search.jsx";
import Profile from "./components/profile.jsx";

const isLoggedIn = () => {
  return (
    localStorage.getItem("hrmsToken") === null ||
    localStorage.getItem("hrmsToken") === "" ||
    localStorage.getItem("hrmsUser") === null ||
    localStorage.getItem("hrmsUser") === ""
  );
};

const getLoggedInUser = () => {
  return localStorage.getItem("hrmsUser")? JSON.parse(localStorage.getItem("hrmsUser")) : ""
}

const getRequest = async (route) => {
  const res = await fetch(`https://hris-qp6t.onrender.com/${route}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "content-Type": "application/json",
      authorization: localStorage.getItem("hrmsToken")
        ? `Bearer ${localStorage.getItem("hrmsToken")}`
        : "",
    },
  });
  const data = await res.json();
  const results = await data.result;
  return results;
};

const postRequest = async (route, data) => {
  const response = await fetch(`https://hris-qp6t.onrender.com/${route}`, {
    method: "post",
    mode: "cors",
    headers: {
      "content-Type": "application/json",
      authorization: localStorage.getItem("hrmsToken")
        ? `Bearer ${localStorage.getItem("hrmsToken")}`
        : "",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

const getEmployeeNamesList = async (data) => {
  const employeeNames = await Promise.all(
    data.map(async (item) => {
      const results = await getRequest(
        `employee/${Object.keys(item).includes("employeeId") ? item.employeeId : item.employee_id}`,
      );
      return `${results.firstName} ${results.lastName}`;
    }),
  );

  return employeeNames;
};

const fetchEmployees = async () => {
  const employees = await getRequest("employees");
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

const invalidInputs = () => {
  const form = document.querySelector("form");
  const invalidFields = form.querySelectorAll("input:invalid, select:invalid");
  invalidFields.forEach((field) => {
    setTimeout(() => {
      field.style.border = "1px solid #ccc";
    }, 1000);

    field.style.border = "solid red 5px";
  });
};

const parentRoutes = [
  {
    // Home path
    path: "/",
    element: <Main getRequest={getRequest} isLoggedIn={isLoggedIn} />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/login",
    element: <Login postRequest={postRequest} invalidInputs={invalidInputs} />,
  },
  {
    path: "/search",
    element: <Search nav={<Nav isLoggedIn={isLoggedIn} />} />,
  },
  {
    path: "/signup",
    element: <Signup postRequest={postRequest} invalidInputs={invalidInputs} />,
  },
  {
    // display all employees list
    path: "employees",
    element: (
      <Employee
        nav={<Nav isLoggedIn={isLoggedIn} location={"/employees"} />}
        getRequest={getRequest}
        postRequest={postRequest}
        isLoggedIn={isLoggedIn}
      />
    ),
  },
  {
    // display all contact information for all employees
    path: "contacts",
    element: (
      <Contacts
        nav={<Nav isLoggedIn={isLoggedIn} location={"/contacts"} />}
        getRequest={getRequest}
        postRequest={postRequest}
        getEmployeeNamesList={getEmployeeNamesList}
        isLoggedIn={isLoggedIn}
      />
    ),
  },
  {
    // display all employee documents
    path: "documents",
    element: (
      <Documents
        nav={<Nav isLoggedIn={isLoggedIn} location={"/documents"} />}
        getRequest={getRequest}
        postRequest={postRequest}
        getEmployeeNamesList={getEmployeeNamesList}
        isLoggedIn={isLoggedIn}
      />
    ),
  },
  {
    // go to employees leave details page
    path: "leaves",
    element: (
      <Leave
        nav={<Nav isLoggedIn={isLoggedIn} location={"/leaves"} />}
        getRequest={getRequest}
        getEmployeeNamesList={getEmployeeNamesList}
        isLoggedIn={isLoggedIn}
      />
    ),
  },
  {
    // display all employee address information
    path: "addresses",
    element: (
      <Addresses
        nav={<Nav isLoggedIn={isLoggedIn} location={"/addresses"} />}
        getRequest={getRequest}
        postRequest={postRequest}
        getEmployeeNamesList={getEmployeeNamesList}
        isLoggedIn={isLoggedIn}
      />
    ),
  },
  {
    // display all employment details
    path: "employmentdetails",
    element: (
      <EmployementDetails
        nav={<Nav isLoggedIn={isLoggedIn} location={"/employmentdetails"} />}
        getRequest={getRequest}
        getEmployeeNamesList={getEmployeeNamesList}
        isLoggedIn={isLoggedIn}
      />
    ),
  },
  {
    // display all payroll packages
    path: "compensations",
    element: (
      <Compensations
        nav={<Nav isLoggedIn={isLoggedIn} location={"/compensations"} />}
        getRequest={getRequest}
        getEmployeeNamesList={getEmployeeNamesList}
        isLoggedIn={isLoggedIn}
      />
    ),
  },
  {
    path: "profile",
    element: <Profile getRequest={getRequest} nav={<Nav isLoggedIn={isLoggedIn} location={"/profile"} />} person={getLoggedInUser()}/>,
  },
];

const createRoutes = [
  {
    path: "contact/create",
    element: (
      <CreateContact
        nav={<Nav isLoggedIn={isLoggedIn} location={"/contacts"} />}
        postRequest={postRequest}
        fetchEmployees={fetchEmployees}
        invalidInputs={invalidInputs}
      />
    ),
  },
  {
    path: "document/create",
    element: (
      <CreateDocument
        nav={<Nav isLoggedIn={isLoggedIn} location={"/documents"} />}
        postRequest={postRequest}
        fetchEmployees={fetchEmployees}
        invalidInputs={invalidInputs}
      />
    ),
  },
  {
    path: "leave/create",
    element: (
      <CreateLeaveDetails
        nav={<Nav isLoggedIn={isLoggedIn} location={"/leaves"} />}
        postRequest={postRequest}
        fetchEmployees={fetchEmployees}
        invalidInputs={invalidInputs}
      />
    ),
  },
  {
    path: "employmentdetail/create",
    element: (
      <CreateEmploymentDetails
        nav={<Nav isLoggedIn={isLoggedIn} location={"/emplotmentdetails"} />}
        postRequest={postRequest}
        fetchEmployees={fetchEmployees}
        invalidInputs={invalidInputs}
      />
    ),
  },
  {
    // create new employee
    path: "employee/create",
    element: (
      <CreateEmployee
        nav={<Nav isLoggedIn={isLoggedIn} location={"/employees"} />}
        postRequest={postRequest}
        invalidInputs={invalidInputs}
      />
    ),
  },
  {
    // create employee address
    path: "address/create",
    element: (
      <CreateAddress
        nav={<Nav isLoggedIn={isLoggedIn} location={"/addresses"} />}
        postRequest={postRequest}
        fetchEmployees={fetchEmployees}
        invalidInputs={invalidInputs}
      />
    ),
  },
  {
    path: "compensation/create",
    element: (
      <CreateCompensation
        nav={<Nav isLoggedIn={isLoggedIn} location={"/compensations"} />}
        postRequest={postRequest}
        fetchEmployees={fetchEmployees}
        invalidInputs={invalidInputs}
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
        nav={<Nav isLoggedIn={isLoggedIn} location={"/employees"} />}
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
        nav={<Nav isLoggedIn={isLoggedIn} location={"/contacts"} />}
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
        nav={<Nav isLoggedIn={isLoggedIn} location={"/documents"} />}
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
        nav={<Nav isLoggedIn={isLoggedIn} location={"/employmentdetails"} />}
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
        nav={<Nav isLoggedIn={isLoggedIn} location={"/addresses"} />}
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
        nav={<Nav isLoggedIn={isLoggedIn} location={"/compensations"} />}
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
