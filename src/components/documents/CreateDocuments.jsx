import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";

export default function CreateDocument({
  nav,
  header,
  postRequest,
  fetchEmployees,
}) {
  const navigate = useNavigate();
  const [employeeNames, setEmployeeNames] = useState([]);
  const [documentForm, setDocumentForm] = useState({
    documentName: "",
    document: null,
    employeeId: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDocumentForm((prevData) => ({
      ...prevData,
      [name]: name === "employeeId" ? Number(value) : value,
    }));
  };

  useEffect(() => {
    const requestData = async () => {
      try {
        const res = await fetchEmployees();
        setEmployeeNames(res);
      } catch (error) {
        console.log("Error fetching employees:", error);
      }
    };

    requestData();
  }, [fetchEmployees]);

  const handleDocumentSubmit = async (e) => {
    e.preventDefault();
    const documentPostJson = await postRequest(
      "https://hris-qp6t.onrender.com/document/create",
      documentForm,
    );
    if (documentPostJson.status === "ok") {
      setDocumentForm({
        documentName: "",
        document: [],
        employeeId: 0,
      });
      navigate("/documents");
    }
  };

  return (
    <div className="main">
      {nav}
      <div className="content edit">
        <a href="/documents">
          <Icon path={mdiArrowLeft} size={1} />
        </a>
        <form>
          <legend>
            <em>
              <strong>ADD NEW DOCUMENT</strong>
            </em>
          </legend>
          <div>
            <label>Employee Name</label>
            <select name="employeeId" onChange={handleChange}>
              <option key="0">Select an Option</option>
              {employeeNames.map((name) => {
                return (
                  <option key={name.id} value={name.id}>
                    {name.fullname}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label>Document Type</label>
            <select name="documentName" onChange={handleChange}>
              <option value="">Select an Option</option>
              <option value="Resume">Resume</option>
              <option value="Certificate">Certificate</option>
              <option value="Tax">Tax</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label>Document</label>
            <input type="file" name="document" onChange={handleChange} />
          </div>
          <button type="submit" onClick={handleDocumentSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
