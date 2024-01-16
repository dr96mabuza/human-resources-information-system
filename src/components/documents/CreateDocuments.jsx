import { useState } from "react";
import Header from "../Header";
import Nav from "../Nav";
import { Link, useParams } from "react-router-dom";

export default function CreateDocument() {
    const {employeeId} = useParams();
    const [documentSuccess, setDocumentSuccess] = useState(false);
    const [documentForm, setDocumentForm] = useState({
        documentName: "",
        document: null,
        employeeId: !employeeId? 0 : Number(employeeId)
    });     

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDocumentForm((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleDocumentSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/document/create", {
            method: "post",
            mode: "cors",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(documentForm)
        });
        const documentPostJson = await response.json();
        if (documentPostJson.status === "ok") {
            setDocumentSuccess(true);
            setDocumentForm({
                documentName: "",
                document: [],
                employeeId: 0
            });
        }
    }

    return (
        <>
        <Header />
        <Nav />
        {!documentSuccess? (
            <form>
                <legend><em><strong>ADD NEW DOCUMENT</strong></em></legend>
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
        ) : (
           <div>
            <h3>Document Successfully Added</h3>
            <p><Link to="/">Click here</Link> to go home.</p>
           </div>
        )}
        </>
    );
}