import { useState } from "react";
import Header from "../Header";
import Nav from "../Nav";
import { Link, useParams } from "react-router-dom";

export default function CreateContact() {
    const {employeeId} = useParams();
    const [contactSuccess, setContactSuccess] = useState(false);
    const [contactForm, setContactForm] = useState({
        email: "",
        cellphoneNumber: "",
        companyEmail: "",
        alternateNumber: "",
        employeeId: !employeeId? 0 : Number(employeeId)
    });     

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactForm((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://hris-qp6t.onrender.com/contact/create", {
            method: "post",
            mode: "cors",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(contactForm)
        });
        const contactPostJson = await response.json();

        if (contactPostJson.status === "ok") {
            setContactSuccess(true);
            setContactForm({
                email: "",
                cellphoneNumber: "",
                companyEmail: "",
                alternateNumber: "",
                employeeId: 0
            });
        }
    }

    return (
        <>
        <Header />
        <Nav />
        {!contactSuccess? (
            <form>
               <legend><em><strong>ADD NEW CONTACT</strong></em></legend>
               <div>
                    <label>Email</label>
                    <input type="text" name="email" onChange={handleChange}/>    
                </div>
                <div>
                    <label>Contact Number</label>
                    <input type="text" name="cellphoneNumber" onChange={handleChange}/>  
                </div>
                <div>
                    <label>Second Email</label>
                    <input type="text" name="companyEmail" onChange={handleChange}/> 
                </div>
                <div>
                    <label>Second Contact Number</label>
                    <input type="text" name="alternateNumber" onChange={handleChange}/>  
                </div>
               <button type="submit" onClick={handleContactSubmit}>Submit</button>
            </form>
        ) : (
            <div>
                <h3>Contact Successfully added</h3>
                <p onClick={handleRedirect}>
                    <Link to={`/compensation/${employeeId}/create`}>
                        Click here
                    </Link> to add compensation details for employee: {employeeId}
                    </p>
                <p onClick={handleRedirect}><Link>Click here</Link> to go home</p>
           </div>
        )}
        </>
    );
}