import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Nav from "../Nav";

export default function JobInfoEditForm() {
    const {id} = useParams();
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        company: "",
        jobRole: "",
        reportsTo: 0,
        employmentStatus: "",
    });

    const getJobInfo = async (id) => {
        const res = await fetch(`https://hris-qp6t.onrender.com/employmentdetail/${id}`, { method: "GET", mode: "cors" });
        const data = await res.json();
        const result = await data.result;
        setFormData({
            company:  result[0].company,
            jobRole:  result[0].jobRole,
            reportsTo:  (result[0].reportsTo === undefined || result[0].reportsTo === null)? 0 : result[0].reportsTo,
            employmentStatus:  result[0].employmentStatus,
        });
    };

    useEffect(() => {
        getJobInfo(id);
    },[id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === "reportsTo"? Number(value): value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://hris-qp6t.onrender.com/employmentdetail/${id}/update`, {
            method: "post",
            mode: "cors",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        console.log(formData)
        const resJson = await response.json();
        // console.log(resJson)
        if ( resJson.status === "ok") {
            setSuccess(true);
        }
    }    

    return (
        <div >
            <Header />
            <Nav />
            <form>
                <legend>Edit JobInfo</legend>
                <div>
                    <label>Company</label>
                    <input type="text" value={formData.company} name="company" onChange={handleChange}/>
                    
                </div>
                <div>
                    <label>Role</label>
                    <input type="text" value={formData.jobRole} name="jobRole" onChange={handleChange}/>
                    
                </div>
                <div>
                
                    <label>Senior/Manager</label>
                    <input type="number" value={formData.reportsTo} name="reportTo" id="" onChange={handleChange}/>
                    
                </div>
                <div>
                    <label>Employment Status</label>
                    <input type="text" value={formData.employmentStatus} name="employmentStatus" onChange={handleChange}/>
                    
                </div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}