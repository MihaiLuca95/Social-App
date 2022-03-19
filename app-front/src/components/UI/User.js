// ui/User module
import { useState, useEffect } from "react";
import UserModel from "../model/User";

const User = ({ 
  userObject,  // << user as a WHOLE object
  viewMode
}) => {

  // validate the user object
  if(userObject !== null && !(userObject instanceof UserModel)) {
    throw new TypeError("UI/User component accepts only objects of class model/User")
  }

  const [chViewMode, setChViewMode] = useState(viewMode);

  useEffect(() => {
    // console.dir(userObject)
  })

  if(userObject === null) {
    return (
      <div className="User">
        loading ...
      </div>
    )
  } else {
    const { avatar, nickname, lastOnline } = userObject; // << user as details

    return (
      <div className="User">
        {chViewMode === "compact" 
          ? (
            <div>
              <img src={avatar} alt="avatar" style={{ width: "80px" }} />
              <button
                onClick={() => {
                  setChViewMode("detailed");
                }}
              >
                Show more
              </button>
            </div>
          ) 
          : (
            <div>
              <img src={avatar} alt="avatar" width="200px" />
              <h2>{nickname}</h2>
              <p>{lastOnline}</p>
              <button
                onClick={() => {
                  setChViewMode("compact");
                }}
              >
                Show less
              </button>
            </div>
          )
        }
      </div>
    );
  }
};

export default User;
