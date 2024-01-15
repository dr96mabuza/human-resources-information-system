import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav";
import Header from "../Header";

export default function AddressEditForm() {
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
            street: await result[0].street,
            suburb: await result[0].suburb,
            city: await result[0].city,
            province: await result[0].province,
            postalCode: await result[0].postalCode
        });
    };

    useEffect(() => {
        getAddress(id);
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
            <h2>Edit address information</h2>
            <form>
                <div>
                    <label>Street</label>
                    <input type="text" value={formData.street} onChange={handleChange}/>
                </div>
                <div>
                    <label>Suburb</label>
                    <input type="text" value={formData.suburb} onChange={handleChange}/>
                </div>
                <div>
                    <label>City</label>
                    <input type="text" value={formData.city} onChange={handleChange}/>
                    
                </div>
                <div>
                    <label>Province</label>
                    <input type="text" value={formData.province} onChange={handleChange}/>
                    
                </div>
                <div>
                    <label>Postal code</label>
                    <input type="number" value={formData.postalCode} onChange={handleChange}/>
                    
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
}