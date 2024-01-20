import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateDocument({ nav, header, postRequest, fetchEmployees }) {
    const navigate = useNavigate();
    const [employeeNames, setEmployeeNames] = useState([]);
    const [documentForm, setDocumentForm] = useState({
        documentName: "",
        document: null,
        employeeId: 0
    });     

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDocumentForm((prevData) => ({
            ...prevData,
            [name]: name === "employeeId"? Number(value) : value,
        }));
    }

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

    const handleDocumentSubmit = async (e) => {
        e.preventDefault();
        const documentPostJson = await postRequest("https://hris-qp6t.onrender.com/document/create", documentForm);
        if (documentPostJson.status === "ok") {
            setDocumentForm({
                documentName: "",
                document: [],
                employeeId: 0
            });
            navigate("/documents");
        }
    }

    return (
        <>
        {header}
        {nav}
            <form>
                <legend><em><strong>ADD NEW DOCUMENT</strong></em></legend>
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
                    <label>documentName</label>
                    <input type="text" name="documentName" onChange={handleChange}/> 
                </div>
                <div>
                    <label>document</label>
                    <input type="file" name="document" onChange={handleChange}/> 
                </div>
                    <button type="submit" onClick={handleDocumentSubmit}>Submit</button>
            </form>
        </>
    );
}