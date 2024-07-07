import { useState, useEffect } from "react";
import DisplayUser from "./DisplayUser";
import axios from "axios";
import { showToast } from "../toaster";
import { formatDate } from "../../utils";

const baseUrl = import.meta.env.VITE_API_URL;

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await axios.get(`${baseUrl}/internship/applications/`);
        setUsers(userData.data.applications);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []); // Empty dependency array ensures this runs only once on mount

  //   const handleDelete = async (id, index) => {
  //     const confirmed = window.confirm("Are you sure you want to delete?");
  //     if (confirmed) {
  //       try {
  //         await axios.delete(`${baseUrl}/internship/applications/delete/${id}`);
  //         setUsers(users.filter((_, i) => i !== index));
  //         showToast("Application deleted Successfully", "success");
  //       } catch (error) {
  //         showToast("An error occured", "error");
  //         console.log(error);
  //       }
  //     }
  //   };

  const applicationCount = users.length;
  const applicationText =
    applicationCount === 0
      ? "No Applications"
      : applicationCount === 1
      ? "1 Application"
      : `${applicationCount} Applications`;

  return (
    <div className="relative lg:px-[104px] px-[21px]">
      <div className="absolute right-4 bg-blue-500 text-white p-2 rounded">
        {applicationText}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {users &&
          users.map((item, index) => (
            <DisplayUser
              key={index}
              index={index}
              id={item.id}
              name={item.full_name}
              skill={item.skill}
              email={item.email}
              applicationDate={formatDate(item.date_created)}
              //   onDelete={handleDelete}
            />
          ))}
      </div>
    </div>
  );
};

export default UserList;
