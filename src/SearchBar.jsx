import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function SearchBar({ postRequest }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState({
    search: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSearchClick = async (e) => {
    e.preventDefault();
    const result = await postRequest(
      "https://hris-qp6t.onrender.com/search",
      search,
    );
    // console.log(search);
    const list = await result.result;
    if (result.status === "ok") {
      navigate("/search", { state: list });
    }
  };
  return (
    <form id="search">
      <input
        type="text"
        placeholder="search....."
        onChange={handleChange}
        name="search"
        required
      />
      <button type="submit" onClick={handleSearchClick}>
        SEARCH
      </button>
    </form>
  );
}
