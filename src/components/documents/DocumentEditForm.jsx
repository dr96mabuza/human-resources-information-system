import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";

export default function DocumentEditForm({ nav, getRequest, postRequest }) {
  const { id } = useParams();
  const defaultState = {
    documentName: "",
    document: "",
  };
  const [formData, setFormData] = useState(defaultState);

  const getDocument = async (id) => {
    const result = await getRequest(
      `document/${id}`,
    );
    setFormData({
      documentName: await result.documentName,
      document: await result.document,
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
    const resJson = await postRequest(
      `document/${id}/update`,
      formData,
    );

    if (resJson.status === "ok") {
      navigate("/documents");
    }
  };
  return (
    <div className="main">
      {nav}
      {defaultState === formData ? (
        <section className="loaderContainer">
          <div className="loader"></div>
        </section>
      ) : (
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
      )}
    </div>
  );
}
