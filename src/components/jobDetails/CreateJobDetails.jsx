import { useState } from "react";
import Header from "../Header";
import Nav from "../Nav";
import { Link, useParams } from "react-router-dom";

export default function CreateEmploymentDetails() {
    const {employeeId} = useParams();
    const [employmentDetailsSuccess, setEmploymentDetailsSuccess] = useState(false);
    const [employmentDetailsForm, setEmploymentDetailsForm] = useState({
        company: "",
        jobRole: "",
        reportsTo: 0,
        employmentStatus: "",
        employeeId: !employeeId? 0 : Number(employeeId)
    });     

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmploymentDetailsForm((prevData) => ({
            ...prevData,
            [name]: name === "reportsTo"? Number(value) : value,
        }));
    }

    const handleEmploymentDetailsSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://hris-qp6t.onrender.com/employmentdetail/create", {
            method: "post",
            mode: "cors",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(employmentDetailsForm)
        });
        const employmentDetailsPostJson = await response.json();
        if (employmentDetailsPostJson.status === "ok") {
            setEmploymentDetailsSuccess(true);
            setEmploymentDetailsForm({
                company: "",
                jobRole: "",
                reportsTo: 0,
                employmentStatus: "",
                employeeId: 0
            });
        }
    }

    return (
        <>
        <Header />
        <Nav />
        {!employmentDetailsSuccess? (
            <form>
                <legend><em><strong>ADD NEW JOB DETAILS</strong></em></legend>
                <div>
                    <label>Company</label>
                    <input type="text" name="company" onChange={handleChange}/>
                </div>
                <div>
                    <label>Role</label>
                    <input type="text" name="jobRole" onChange={handleChange}/>
                </div>
                <div>
                    <label>Senior/Manager</label>
                    <input type="number"name="reportTo" id="" onChange={handleChange}/>
                </div>
                <div>
                    <label>Employment Status</label>
                    <input type="text" name="employmentStatus" onChange={handleChange}/>
                    
                </div>
                <button type="submit" onClick={handleEmploymentDetailsSubmit}>Submit</button>
            </form>
        ) : (
            <div>
                <h3>Employment Details Successfully Added</h3>
                <p onClick={handleRedirect}><Link to={`/document/${employeeId}create/`}>Click here</Link> to add document.</p>
                <p onClick={handleRedirect}><Link to="/">Click here</Link> to go home</p>
            </div>
        )}
        </>
    );
}