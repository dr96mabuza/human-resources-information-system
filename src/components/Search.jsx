import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import {
  mdiDeleteCircleOutline,
  mdiOpenInNew,
  mdiFileEditOutline,
} from "@mdi/js";

export default function Search({ nav }) {
  const location = useLocation();
  const searchResults = location.state;
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const deleteEmployee = async (id) => {
    const resJson = await postRequest(
      `employee/${id}/delete`,
      {},
    );
    if (resJson.status === "ok") {
      setData(await getRequest("employees"));
    }
  };

  return (
    <div className="main">
      {nav}
      <div className="content edit">
        <h4>Search Results</h4>
        {searchResults.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>ID Number</th>
                <th>Gender</th>
                <th>Date of birth</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((person) => (
                <tr key={person.id}>
                  <td>{person.firstName}</td>
                  <td>{person.lastName}</td>
                  <td>{person.idNumber}</td>
                  <td>{person.gender}</td>
                  <td>{person.dateOfBirth}</td>
                  <td>
                    {/* <Link>
                    <Icon path={mdiOpenInNew} size={1} />
                  </Link> */}
                    <Link to={`/employee/${person.id}/update`}>
                      <Icon path={mdiFileEditOutline} size={1} />
                    </Link>

                    <Icon
                      path={mdiDeleteCircleOutline}
                      size={1}
                      className="deleteBTN"
                      onClick={() => {
                        deleteEmployee(person.id);
                      }}
                      onSubmit={handleSubmit}
                      type="submit"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot></tfoot>
          </table>
        ) : (
          <div id="nomatch">
            <h3>No Match Found</h3>
          </div>
        )}
      </div>
    </div>
  );
}
