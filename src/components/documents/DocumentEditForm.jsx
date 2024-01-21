import fs from "fs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import Nav from "../Nav";

export default function DocumentEditForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    documentName: "",
    document: "",
  });

  const getDocument = async (id) => {
    const res = await fetch(`https://hris-qp6t.onrender.com/document/${id}`, {
      method: "GET",
      mode: "cors",
    });
    const data = await res.json();
    const result = await data.result;
    setFormData({
      documentName: await result[0].documentName,
      document: await result[0].document,
    });
  };

  useEffect(() => {
    getDocument(id);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://hris-qp6t.onrender.com/document/${id}/update`,
      {
        method: "post",
        mode: "cors",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );
    const resJson = await response.json();
    console.log(resJson);
    // if ( resJson.status === "ok") {
    //     setSuccess(true);
    // }
  };
  return (
    <div className="main">
      <Nav />
      <div className="content edit">
        <a href="/documents">
          <Icon path={mdiArrowLeft} size={1} />
        </a>
        <form>
          <legend>
            <em>
              <strong>EDIT DOCUMENT</strong>
            </em>
          </legend>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={formData.documentName}
              name="documentName"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Document</label>
            <input type="file" name="document" onChange={handleChange} />
          </div>

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
