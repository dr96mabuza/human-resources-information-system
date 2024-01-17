import { useState } from "react";
import Header from "../Header";
import Nav from "../Nav";
import { Link, useParams } from "react-router-dom";

export default function CreateLeaveDetails() {
    const {employeeId} = useParams();
    const [leaveDetailsSuccess, setLeaveDetailsSuccess] = useState(false);
    const [leaveDetailsForm, setLeaveDetailsForm] = useState({
        balance: 0,
        daysAbsent: 0,
        reportsTo: 0,
        employeeId: !employeeId? 0 : Number(employeeId)
    });     

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLeaveDetailsForm((prevData) => ({
            ...prevData,
            [name]: Number(value),
        }));
    }

    const handleLeaveDetailsSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://hris-qp6t.onrender.com/leave/create", {
            method: "post",
            mode: "cors",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(leaveDetailsForm)
        });
        const leaveDetailsPostJson = await response.json();
        if (leaveDetailsPostJson.status === "ok") {
            setLeaveDetailsSuccess(true);
            setLeaveDetailsForm({
                balance: 0,
                daysAbsent: 0,
                reportsTo: 0,
                employeeId: 0
            });
        }
    }

    return (
        <>
        <Header />
        <Nav />
        {!leaveDetailsSuccess? (
            <form>
                <legend><em><strong>ADD NEW LEAVE DETAILS</strong></em></legend>
                <div>
                    <label>Available days</label>
                    <input type="number" name="balance" onChange={handleChange}/> 
                </div>
                    <button type="submit" onClick={handleLeaveDetailsSubmit}>Submit</button>
            </form>
        ) : (
           <div>
            <h3>Leave Details Successfully Added</h3>
            <p onClick={handleRedirect}><Link to={`/employmentdetail/${employeeId}/create`}>Click here!</Link> to add a job details.</p>
            <p onClick={handleRedirect}><Link to="/">Click here</Link> to go home.</p>
           </div>
        )}
        </>
    );
}