import fs from "fs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Nav from "../Nav";


export default function DocumentEditForm() {
    const {id} = useParams();
    const [formData, setFormData] = useState({
        documentName: "",
        document: "",
    
    });

    const getDocument = async (id) => {
        const res = await fetch(`http://localhost:5000/document/${id}`, { method: "GET", mode: "cors" });
        const data = await res.json();
        const result = await data.result;
        setFormData({
            documentName: await result[0].documentName,
            document: await result[0].document
        });
    };

    useEffect(() => {
        getDocument(id);
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
        const response = await fetch(`http://localhost:5000/document/${id}/update`, {
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
                <legend>Edit Document</legend>
                <div>
                    <label>Name</label>
                    <input type="text" value={formData.documentName} name="documentName" onChange={handleChange}/>
                    
                </div>
                <div>
                    <label>Document</label>
                    <input type="file" name="document" onChange={handleChange}/>
                    
                </div>
                
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    );
}