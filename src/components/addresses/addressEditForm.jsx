import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav";
import Header from "../Header";

export default function AddressEditForm() {
    const [success, setSuccess] = useState(false);
    const {id} = useParams();
    const [formData, setFormData] = useState({
        street: "",
        suburb: "",
        city: "",
        province: "",
        postalCode: 0
    });

    const getAddress = async (id) => {
        const res = await fetch(`http://localhost:5000/address/${id}`, { method: "GET", mode: "cors" });
        const data = await res.json();
        const result = await data.result;
        setFormData({
            street: result[0].street,
            suburb: result[0].suburb,
            city: result[0].city,
            province: result[0].province,
            postalCode: result[0].postalCode
        });
    };

    useEffect(() => {
        const g = async () => {
            await getAddress(id);
        }
        g();
    },[id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'postalCode' ? Number(value) : value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/address/${id}/update`, {
            method: "post",
            mode: "cors",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        console.log(formData)
        const resJson = await response.json();
        console.log(resJson)
        if ( resJson.status === "ok") {
            setSuccess(true);
        }
    }

    

    return (
        <>
        <Header />
        <Nav />
        {success === false?
            <form>
            <legend>Edit address information</legend>
                <div>
                    <label>Street</label>
                    <input type="text" value={formData.street} name="street" onChange={handleChange}/>
                </div>
                <div>
                    <label>Suburb</label>
                    <input type="text" value={formData.suburb} name="suburb" onChange={handleChange}/>
                </div>
                <div>
                    <label>City</label>
                    <input type="text" value={formData.city} name="city" onChange={handleChange}/>
                    
                </div>
                <div>
                    <label>Province</label>
                    <input type="text" value={formData.province} name="province" onChange={handleChange}/>
                    
                </div>
                <div>
                    <label>Postal code</label>
                    <input type="number" value={formData.postalCode} name="postalCode" onChange={handleChange}/>
                    
                </div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form> : 
            <div>
                <h3>New Address added!</h3>
                <p>go to Addresses.</p>
            </div>} 
                
        </>
    );
}