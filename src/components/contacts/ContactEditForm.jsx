import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Nav from "../Nav";

export default function ContactEditForm() {
    const {id} = useParams();
    const [formData, setFormData] = useState({
        email: "",
        cellphoneNumber: "",
        workEmail: "",
        alternateNumber: ""
    });

    const getContact = async (id) => {
        const res = await fetch(`http://localhost:5000/contact/${id}`, { method: "GET", mode: "cors" });
        const data = await res.json();
        const result = await data.result;
        setFormData({
            email: await result[0].email,
            cellphoneNumber: await result[0].cellphoneNumber,
            workEmail: await result[0].workEmail,
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
    return (
        <>
        <Header />
        <Nav />
        <div /*style={{display:"none"}}*/ className="modal">
            <h2>Edit Contact</h2>
            <form>
                <div>
                    <label>Email</label>
                    <input type="text" value={formData.email} onChange={handleChange}/>
                    
                </div>
                <div>
                    <label>Contact Number</label>
                    <input type="text" value={formData.cellphoneNumber} onChange={handleChange}/>
                    
                </div>
                <div>
                    <label>Second Email</label>
                    <input type="text" value={formData.workEmail} onChange={handleChange}/>
                    
                </div>
                <div>
                    <label>Second Contact NUmber</label>
                    <input type="text" value={formData.alternateNumber} onChange={handleChange}/>
                    
                </div>
                <button>Submit</button>
            </form>
        </div>
        </>
    );
}