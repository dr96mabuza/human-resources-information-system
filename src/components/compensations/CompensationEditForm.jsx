import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CompansationForm() {
    const {id} = useParams();
    const [formData, setFormData] = useState({
        salary: 0,
        deductions: 0,
        bonus: 0
    });

    const getCompensation = async (id) => {
        const res = await fetch(`http://localhost:5000/compansation/${id}`, { method: "GET", mode: "cors" });
        const data = await res.json();
        const result = await data.result;
        setFormData({
            salary: await result[0].salary,
            deductions: await result[0].deductions,
            bonus: await result[0].bonus
        });
    };

    useEffect(() => {
        getCompensation(id);
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
            <h2>Edit Compensation</h2>
            <form>
                <div>
                    <label>Salary</label>
                    <input type="number" value={formData.salary} onChange={handleChange}/>
                    
                </div>
                <div>
                    <label>Deductions</label>
                    <input type="number" value={formData.deductions} onChange={handleChange}/>
                    
                </div>
                <div>
                    <label>Bonus</label>
                    <input type="number" value={formData.bonus} onChange={handleChange}/>
                    
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}