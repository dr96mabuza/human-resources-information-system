import { useState } from "react";
import Header from "../Header";
import Nav from "../Nav";

export default function CreateEmployee() {
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

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
        <Header />
        <Nav />
        <form method="post" action="http://localhost:5000/employee/create">
            <legend>Personal Details</legend>
            <div>
                <label>Name</label>
                <input type="text" onChange={handleChange}/> 
            </div>
            <div>
                <label>Surname</label>
                <input type="text"  onChange={handleChange}/> 
            </div>
            <div>
                <label>ID Number</label>
                <input type="text"  onChange={handleChange}/> 
            </div>
            <div>
                <label>Gender</label>
                <select  onChange={handleChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to state">Prefer not to state</option>
                </select>
            </div>
            <div>
                <label>Date of birth</label>
                <input type="date"  onChange={handleChange}/> 
            </div>
            <button type="submit" onClick={handleSubmit}>Next</button>
        </form>
        </>
    );
}