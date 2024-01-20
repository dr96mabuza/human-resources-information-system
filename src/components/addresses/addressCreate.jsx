import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAddress({ nav, header, postRequest, fetchEmployees }) {
    const navigate = useNavigate();
    const [employeeNames, setEmployeeNames] = useState([]);
    const defaultState = {
        street: "",
        suburb: "",
        city: "",
        province: "",
        postalCode: 0,
        employeeId: 0 
    };
    const [addressForm, setAddressForm] = useState(defaultState);  
    
    useEffect(() => {
        const requestData = async () => {
            try {
                const res = await fetchEmployees();
                setEmployeeNames(res);
            } catch (error) {
                console.log("Error fetching employees:", error);
            }
        };
    
        requestData();
    }, [fetchEmployees]); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddressForm((prevData) => ({
            ...prevData,
            [name]: name === "postalCode" || name === "employeeId"? Number(value) : value,
        }));
    }

    const handleAddressSubmit = async (e) => {
        e.preventDefault();
        if (
            addressForm.postalCode != 0 &&
            addressForm.employeeId != 0 &&
            addressForm.street!= "" &&
            addressForm.suburb!= "" &&
            addressForm.city!= "" &&
            addressForm.province!= ""
        ) {
            console.log(addressForm)
            const addressPostJson = await postRequest("https://hris-qp6t.onrender.com/address/create", addressForm);

            if (addressPostJson.status === "ok") {
                setAddressForm(defaultState);
                navigate("/addresses");
            }
        }
    }

    return (
        <>
            {header}
            {nav}
                <form>
                    <legend><em><strong>ADD NEW ADDRESS</strong></em></legend>
                    <div>
                        <label>Employee</label>
                        <select name="employeeId" onChange={handleChange}>
                            <option key="0" >Select an Option</option>
                            {employeeNames.map((name) => {
                                return <option key={name.id} value={name.id}>{name.fullname}</option>
                            })}
                        </select>
                    </div>
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
        </>
    );
}