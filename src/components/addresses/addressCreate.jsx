import { useState } from "react";
import Header from "../Header";
import Nav from "../Nav";
import { Link, useParams } from "react-router-dom";

export default function CreateAddress() {
    const {employeeId} = useParams();
    const [addressSuccess, setAddressSuccess] = useState(false);
    const [addressForm, setAddressForm] = useState({
        street: "",
        suburb: "",
        city: "",
        province: "",
        postalCode: 0,
        employeeId: !employeeId? 0 : Number(employeeId)
    });     

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddressForm((prevData) => ({
            ...prevData,
            [name]: name === "postalCode"? Number(value) : value,
        }));
    }

    const handleAddressSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/address/create", {
            method: "post",
            mode: "cors",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(addressForm)
        });
        const addressPostJson = await response.json();

        if (addressPostJson.status === "ok") {
            setAddressSuccess(true);
            setAddressForm({
                street: "",
                suburb: "",
                city: "",
                province: "",
                postalCode: 0,
                employeeId: 0
            });
        }
    }

    return (
        <>
            <Header />
            <Nav />
            {!addressSuccess? (
                <form>
                    <legend><em><strong>ADD NEW ADDRESS</strong></em></legend>
                    <div>
                        <label>Street</label>
                        <input type="text" name="street" onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Suburb</label>
                        <input type="text" name="suburb" onChange={handleChange}/>
                    </div>
                    <div>
                        <label>City</label>
                        <input type="text" name="city" onChange={handleChange}/>
                        
                    </div>
                    <div>
                        <label>Province</label>
                        <input type="text" name="province" onChange={handleChange}/>
                        
                    </div>
                    <div>
                        <label>Postal code</label>
                        <input type="number" name="postalCode" onChange={handleChange}/>
                        
                    </div>
                    <button type="submit" onClick={handleAddressSubmit}>Submit</button>
                </form>
        ) : (
            <div>
                <h3>Address Successfully added</h3>
                <p>
                    <Link to={`/contact/${employeeId}/create`}>Click here</Link>
                     to add contact for employee: {employeeId}.
                </p>
                <p><Link to="/">Click here</Link> to go home</p>
           </div>
        )}
        </>
    );
}