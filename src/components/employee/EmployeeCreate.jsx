import { useState } from "react";
import Header from "../Header";
import Nav from "../Nav";

export default function CreateEmployee() {
    const [success, setSuccess] = useState({
        employee: false
    });
    const [id, setId] = useState(0);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        idNumber: "",
        gender: "",
        dateOfBirth: "",
        passwordSalt: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleEmployeeSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/employee/create", {
            method: "post",
            mode: "cors",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const resJson = await response.json();
        if ( resJson.status === "ok") {
            console.log(resJson.result)
        }
    }
    return (
        <>
        <Header />
        <Nav />
        <form method="post">
            <legend>Personal Details</legend>
            <div>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange}/> 
            </div>
            <div>
                <label>Surname</label>
                <input type="text" name="surname"  onChange={handleChange}/> 
            </div>
            <div>
                <label>ID Number</label>
                <input type="text" name="idNumber"  onChange={handleChange}/> 
            </div>
            <div>
                <label>Gender</label>
                <select name="gender" onChange={handleChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to state">Prefer not to state</option>
                </select>
            </div>
            <div>
                <label>Date of birth</label>
                <input type="date" name="dateOfBirth"  onChange={handleChange}/> 
            </div>
            <button type="submit" onClick={handleEmployeeSubmit}>Next</button>
        </form>
        </>
    );
}