import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function JobInfoEditForm() {
    const {id} = useParams();
    const [formData, setFormData] = useState({
        company: "",
        jobRole: "",
        reportsTo: 0,
        employmentStatus: "",
    });

    const getJobInfo = async (id) => {
        const res = await fetch(`http://localhost:5000/employmentdetail/${id}`, { method: "GET", mode: "cors" });
        const data = await res.json();
        const result = await data.result;
        setFormData({
            company: await result[0].company,
            jobRole: await result[0].jobRole,
            reportsTo: await result[0].reportsTo,
            employmentStatus: await result[0].employmentStatus,
        });
    };

    useEffect(() => {
        getJobInfo(id);
    },[id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    return (
        <div /*style={{display:"none"}}*/ className="modal">
            <h2>Edit JobInfo</h2>
            <form>
                <div>
                    <label>Company</label>
                    <input type="text" value={formData.company} onChange={handleChange}/>
                    
                </div>
                <div>
                    <label>Role</label>
                    <input type="text" value={formData.jobRole} onChange={handleChange}/>
                    
                </div>
                <div>
                
                    <label>Senior/Manager</label>
                    <input type="number" value={formData.reportsTo} onChange={handleChange}/>
                    
                </div>
                <div>
                    <label>Employment Status</label>
                    <input type="text" value={formData.employmentStatus} onChange={handleChange}/>
                    
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}