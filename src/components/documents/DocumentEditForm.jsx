import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Nav from "../Nav";

export default function DocumentEditForm() {
    const {id} = useParams();
    const [formData, setFormData] = useState({
        name: "",
        data: "",
    
    });

    const getDocument = async (id) => {
        const res = await fetch(`http://localhost:5000/document/${id}`, { method: "GET", mode: "cors" });
        const data = await res.json();
        const result = await data.result;
        setFormData({
            name: await result[0].documentName,
            data: await result[0].data,
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
    return (
        <>
        <Header />
        <Nav />
        
        <div /*style={{display:"none"}}*/ className="modal">
            <h2>Edit Document</h2>
            <form>
                <div>
                    <input type="text" value={formData.name} onChange={handleChange}/>
                    <label>name</label>
                </div>
                <div>
                    <input type="file" value={formData.data} onChange={handleChange}/>
                    <label>data</label>
                </div>
                
                <button>Submit</button>
            </form>
        </div>
        </>
    );
}