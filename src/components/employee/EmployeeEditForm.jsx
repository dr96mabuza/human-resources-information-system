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
        const res = await fetch(`http://localhost:5000/employee/${id}`, { method: "GET", mode: "cors" });
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
    return (
        <>
        <Header />
        <Nav />
        <div /*style={{display:"none"}}*/ className="modal">
            <h2>Edit Personal Information</h2>
            <form>
                <div>
                <label>Name</label>
                    <input type="text" value={formData.firstName} onChange={handleChange}/>
                    
                </div>
                <div>
                <label>Surname</label>
                    <input type="text" value={formData.lastName} onChange={handleChange}/>
                    
                </div>
                <div>
                <label>ID Number</label>
                    <input type="text" value={formData.idNumber} onChange={handleChange}/>
                    
                </div>
                <div>
                <label>Gender</label>
                <input type="text" value={formData.gender} onChange={handleChange}/>
                    
                </div>
                <div>
                <label>Date of birth</label>
                <input type="text" value={formData.dateOfBirth} onChange={handleChange}/>
                    
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
}