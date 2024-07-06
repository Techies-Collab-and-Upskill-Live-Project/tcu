import { useState } from "react";
import DisplayUser from "./DisplayUser";
import axios from "axios";

const UserList = () => {
  const [users, setUser] = useState([]);

  const getUser = async () => {
    try {
      const userData = await axios.get(
        "https://tcu-backend-one.onrender.com/api/v1/internship/applications/"
      );

      setUser(userData.data.applications)
    //   console.log(userData.data.applications);
    } catch (error) {
      console.log(error);
    }
  };

  getUser();

  console.log(users);

  return (
    <div className="lg:px-[104px] px-[21px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {users && users.map((item, index) => (
            <DisplayUser name={item.full_name} skill={item.skill} email={item.email} />
        ))}
        {/* {users.map((item, index) => (
          <DisplayUser
            key={index}
            item={item}
            name={item.full_name}
            email={item.email}
            skill={item.skill}
          />
        ))} */}
      </div>
    </div>
  );
};

export default UserList;
