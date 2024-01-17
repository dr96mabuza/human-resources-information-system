import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav";
import Header from "../Header";

export default function PersonalInfoEditForm() {
    const {id} = useParams();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        idNumber: "",
        gender: "",
        dateOfBirth: ""
    });

    const getPersonalInfo = async (id) => {
        const res = await fetch(`https://hris-qp6t.onrender.com/employee/${id}`, { method: "GET", mode: "cors" });
        const data = await res.json();
        const result = await data.result;
        setFormData({
            firstName: await result[0].firstName,
            lastName: await result[0].lastName,
            idNumber: await result[0].idNumber,
            gender: await result[0].gender,
            dateOfBirth: await result[0].dateOfBirth
        });
    };

    useEffect(() => {
        getPersonalInfo(id);
    },[id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://hris-qp6t.onrender.com/employee/${id}/update`, {
            method: "post",
            mode: "cors",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const resJson = await response.json();
        console.log(resJson)
        // if ( resJson.status === "ok") {
        //     setSuccess(true);
        // }
    }

    return (
        <>
        <Header />
        <Nav />
        <div /*style={{display:"none"}}*/ className="modal">
            <form>
                <legend>Edit Personal Information</legend>
                <div>
                <label>Name</label>
                    <input type="text" value={formData.firstName} name="firstName" onChange={handleChange}/>
                    
                </div>
                <div>
                <label>Surname</label>
                    <input type="text" value={formData.lastName} name="lastName" onChange={handleChange}/>
                    
                </div>
                <div>
                <label>ID Number</label>
                    <input type="text" value={formData.idNumber} name="idNumber" onChange={handleChange}/>
                    
                </div>
                <div>
                <label>Gender</label>
                <input type="text" value={formData.gender} name="gender" onChange={handleChange}/>
                    
                </div>
                <div>
                <label>Date of birth</label>
                <input type="date" value={formData.dateOfBirth} name="dateOfBirth" onChange={handleChange}/>
                    
                </div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
        </>
    );
}