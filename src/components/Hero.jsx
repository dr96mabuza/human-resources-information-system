import Nav from "./Nav";
import { useEffect, useState } from "react";
export default function Main() {
  const defaultState = {
    addressCount: 0,
    contactCount: 0,
    compensationCount: 0,
    documentCount: 0,
    employeeCount: 0,
    employementDetailCount: 0,
    leaveCount: 0,
  };
  const [counts, setCounts] = useState(defaultState);

  const fetchGetRequest = async (request) => {
    const res = await fetch(`https://hris-qp6t.onrender.com/${request}`, {
      method: "GET",
      mode: "cors",
    });
    const data = await res.json();
    return data;
  };

  const getRequestResultCount = (data) => {
    return data.result.length;
  };

  const getCounts = async () => {
    try {
      setCounts({
        addressCount: getRequestResultCount(await fetchGetRequest("addresses")),
        contactCount: getRequestResultCount(await fetchGetRequest("contacts")),
        compensationCount: getRequestResultCount(
          await fetchGetRequest("compansations"),
        ),
        documentCount: getRequestResultCount(
          await fetchGetRequest("documents"),
        ),
        employeeCount: getRequestResultCount(
          await fetchGetRequest("employees"),
        ),
        employementDetailCount: getRequestResultCount(
          await fetchGetRequest("employmentdetails"),
        ),
        leaveCount: getRequestResultCount(await fetchGetRequest("leaves")),
      });
    } catch (error) {
      console.error("Error getting address count:", error);
      setCounts({ error: "Error" });
    }
  };

  useEffect(() => {
    getCounts();
  }, []);

  return (
    <section id="main" className="content">
      {counts === defaultState ? (
        <section className="loaderContainer">
          <div className="loader"></div>
        </section>
      ) : (
        <section>
          <div>
            <h3>Welcome to Our HR Management System!</h3>
            <p>Dear Team,</p>
            <p>
              Our HR Management System is designed to efficiently track and
              manage employee details, compensation, time off, and documents.
              This centralized platform allows us to streamline HR processes,
              ensuring accuracy and accessibility of crucial information.
            </p>
            <h3>Key Features:</h3>
            <p>
              1. <strong>Employee Details:</strong> View and update essential
              employee information.
            </p>
            <p>
              2. <strong>Compensation:</strong> Track details related to
              employee salaries and benefits.
            </p>
            <p>
              3. <strong>Time Off:</strong> Manage and keep track of employee
              leave balances.
            </p>
            <p>
              4. <strong>Documents:</strong> Store and access important HR
              documents.
            </p>

            <p>
              This system aims to enhance our HR operations, promoting
              transparency and accessibility of employee-related information. If
              you have any questions or require assistance, please feel free to
              reach out.
            </p>

            <p>Best Regards,</p>
            <p>HR Team</p>
          </div>

          <p>addresses available: {counts.addressCount}</p>
          <p>employee count: {counts.employeeCount}</p>
          <p>compensation count: {counts.compensationCount}</p>
          <p>document Count: {counts.documentCount}</p>
          <p>employee count: {counts.employeeCount}</p>
          <p>leave count: {counts.leaveCount}</p>
        </section>
      )}
    </section>
  );
}
