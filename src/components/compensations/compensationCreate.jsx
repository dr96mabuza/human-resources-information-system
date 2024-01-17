import { useState } from "react";
import Header from "../Header";
import Nav from "../Nav";
import { Link, useParams } from "react-router-dom";

export default function CreateCompensation() {
    const {employeeId} = useParams();
    const [compensationSuccess, setCompensationSuccess] = useState(false);
    const [compensationForm, setCompensationForm] = useState({
        salary: 0,
        deductions: 0,
        bonus: 0,
        employeeId: !employeeId? 0 : Number(employeeId)
    });     

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompensationForm((prevData) => ({
            ...prevData,
            [name]: Number(value),
        }));
    }

    const handleCompensationSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://hris-qp6t.onrender.com/compansation/create", {
            method: "post",
            mode: "cors",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(compensationForm)
        });
        const compensationPostJson = await response.json();
        if (compensationPostJson.status === "ok") {
            setCompensationSuccess(true);
            setCompensationForm({
                salary: 0,
                deductions: 0,
                bonus: 0,
                employeeId: 0
            });
        }
    }

    return (
        <>
        <Header />
        <Nav />
        {!compensationSuccess? (
            <form>
               <legend><em><strong>ADD NEW COMPENSATION DETAILS</strong></em></legend>
               <div>
                   <label>Salary</label>
                   <input type="number" name="salary" onChange={handleChange}/>
               </div>
               <div>
                   <label>Deductions</label>
                   <input type="number" name="deductions" onChange={handleChange}/>
               </div>
               <div>
                    <label>Bonus</label>
                    <input type="number" name="bonus" onChange={handleChange}/>
                           
                </div>
                <button type="submit" onClick={handleCompensationSubmit}>Submit</button>
            </form>
        ) : (
            <div>
                <h3>Compensation Successfully added</h3>
                <p><Link to={`/leave/${employeeId}/create`}>Click here</Link> to add leave details for employee: {employeeId}</p>
                <p><Link to="/">Click here</Link> to go home</p>
            </div>
        )}
        </>
    );
}