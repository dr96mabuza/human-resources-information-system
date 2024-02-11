import { useEffect, useState } from "react";

export default function Profile({ getRequest }) {
  const user = JSON.parse(localStorage.getItem("hrmsUser"));
  const [userProfile, setUserProfile] = useState("")

  useEffect(() => {
    const getProfile = async () => {
      const requestResult = await getRequest(`profile/1`);
      setUserProfile(requestResult)
      
    };
    getProfile();
    console.log(userProfile)
  }, [getRequest]);

  return (
    <div>
      {user && userProfile != "" ? (
        <div>
          <h2>Employee</h2>
          {Object.keys(user).map((key) => {
            return (
              <div key={key}>
                {key}: {user[key]}
              </div>
            );
          })}
          <div>
            {Object.keys(userProfile).map((key) => {
                return (
                    <div key={key}>
                        <h3>{key}</h3>
                        {Object.keys(userProfile[key]).map((item) => {
                            return (
                                <p key={item}>{item}: {userProfile[key][item]}</p>
                            )
                        })}
                    </div>
                )
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
