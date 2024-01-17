import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Nav from "../Nav";

export default function ContactEditForm() {
    const {id} = useParams();
    const [formData, setFormData] = useState({
        email: "",
        cellphoneNumber: "",
        companyEmail: "",
        alternateNumber: ""
    });

    const getContact = async (id) => {
        const res = await fetch(`https://hris-qp6t.onrender.com/contact/${id}`, { method: "GET", mode: "cors" });
        const data = await res.json();
        const result = await data.result;
        setFormData({
            email: await result[0].email,
            cellphoneNumber: await result[0].cellphoneNumber,
            companyEmail: await result[0].companyEmail,
            alternateNumber: await result[0].alternateNumber
        });
    };

    useEffect(() => {
        getContact(id);
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
        const response = await fetch(`https://hris-qp6t.onrender.com/contact/${id}/update`, {
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
            <form>
                <legend>Edit Contact</legend>
                <div>
                    <label>Email</label>
                    <input type="text" value={formData.email} name="email" onChange={handleChange}/>
                    
                </div>
                <div>
                    <label>Contact Number</label>
                    <input type="text" value={formData.cellphoneNumber} name="cellphoneNumber" onChange={handleChange}/>
                    
                </div>
                <div>
                    <label>Second Email</label>
                    <input type="text" value={formData.companyEmail} name="companyEmail" onChange={handleChange}/>
                    
                </div>
                <div>
                    <label>Second Contact NUmber</label>
                    <input type="text" value={formData.alternateNumber} name="alternateNumber" onChange={handleChange}/>
                    
                </div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    );
}