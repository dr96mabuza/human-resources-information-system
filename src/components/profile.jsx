import { useEffect, useState } from "react";

export default function Profile({ getRequest, person, nav }) {
  const user = person;
  const [userProfile, setUserProfile] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      const requestResult = await getRequest(`profile/1`);
      setUserProfile(requestResult);
    };
    getProfile();
  }, [getRequest]);

  const dis = (key) => {
    document.querySelectorAll(".hu").forEach((item) => {
      item.style.display = "none";
    });
    document.querySelector(`#${key}Section`).style.display = "block";
  };

  return (
    <div className="main">
      {nav}
      {user && userProfile != "" ? (
        <div className="content">
          <h2>Employee</h2>
          {Object.keys(user).map((key) => {
            return (
              <div key={key}>
                {key}: {user[key]}
              </div>
            );
          })}
          <div className="profileContainer">
            <div id="profileNav">
              {Object.keys(userProfile).map((key) => {
                return (
                  <p
                    key={`${key}Tab`}
                    onClick={() => {
                      dis(key);
                    }}
                  >
                    {key}
                  </p>
                );
              })}
            </div>

            {Object.keys(userProfile).map((key) => {
              return (
                <div key={key} id={`${key}Section`} className="hu">
                  <h3>{key}</h3>
                  {Object.keys(userProfile[key]).map((item) => {
                    return !["id", "employeeId", "leave_id", "employee_id"].toString().includes(item) ? (
                      <p key={item}>
                        {item}: {userProfile[key][item]}
                      </p>
                    ) : null;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <section className="loaderContainer">
          <div className="loader"></div>
        </section>
      )}
    </div>
  );
}
