import { Link } from "react-router-dom";

export default function Nav({ location, isLoggedIn }) {
  const logOut = () => {
    localStorage.setItem("hrmsToken", "");
    localStorage.setItem("hrmsUser", "");
  };

  return (
    <div id="nav">
      <Link to="/">
        <h2>H R M S</h2>
      </Link>
      <ul>
        {location === "/addresses" ? (
          <li style={{ backgroundColor: "#4CAF50" }}>
            <a href="/addresses" style={{ color: "#ffffff" }}>
              Addresses
            </a>
          </li>
        ) : (
          <li>
            <a href="/addresses">Addresses</a>
          </li>
        )}
        {location === "/contacts" ? (
          <li style={{ backgroundColor: "#4CAF50" }}>
            <a href="/contacts" style={{ color: "#ffffff" }}>
              Contacts
            </a>
          </li>
        ) : (
          <li>
            <a href="/contacts">Contacts</a>
          </li>
        )}
        {location === "/compensations" ? (
          <li style={{ backgroundColor: "#4CAF50" }}>
            <a href="/compensations" style={{ color: "#ffffff" }}>
              Compensations
            </a>
          </li>
        ) : (
          <li>
            <a href="/compensations">Compensations</a>
          </li>
        )}
        {location === "/documents" ? (
          <li style={{ backgroundColor: "#4CAF50" }}>
            <a href="/documents" style={{ color: "#ffffff" }}>
              Documents
            </a>
          </li>
        ) : (
          <li>
            <a href="/documents">Documents</a>
          </li>
        )}
        {location === "/employees" ? (
          <li style={{ backgroundColor: "#4CAF50" }}>
            <a href="/employees" style={{ color: "#ffffff" }}>
              Employees
            </a>
          </li>
        ) : (
          <li>
            <a href="/employees">Employees</a>
          </li>
        )}
        {location === "/employmentdetails" ? (
          <li style={{ backgroundColor: "#4CAF50" }}>
            <a href="/employmentdetails" style={{ color: "#ffffff" }}>
              Job details
            </a>
          </li>
        ) : (
          <li>
            <a href="/employmentdetails">Job details</a>
          </li>
        )}
        {location === "/leaves" ? (
          <li style={{ backgroundColor: "#4CAF50" }}>
            <a href="/leaves" style={{ color: "#ffffff" }}>
              Leave
            </a>
          </li>
        ) : (
          <li>
            <a href="/leaves">Leave</a>
          </li>
        )}
      </ul>
      {isLoggedIn() ? null : (
        <button
          onClick={() => {
            logOut();
          }}
          type="submit"
        >
          Sign Out
        </button>
      )}
    </div>
  );
}
