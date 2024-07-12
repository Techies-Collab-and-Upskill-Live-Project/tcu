import { useState, useEffect } from "react";
import DisplayUser from "./DisplayUser";
import axios from "axios";
import { showToast } from "../toaster";
import { formatDate } from "../../utils";

const baseUrl = import.meta.env.VITE_API_URL;

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await axios.get(`${baseUrl}/internship/applications/`);
        setUsers(userData.data.applications);
      } catch (error) {
        showToast("An Error occured", "error");
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    getUser();
  }, []); // Empty dependency array ensures this runs only once on mount

  const applicationCount = users.length;
  const applicationText =
    applicationCount === 0
      ? "No Applications"
      : applicationCount === 1
      ? "1 Application"
      : `${applicationCount} Applications`;

  return (
    <div className="relative lg:px-[104px] px-[21px] min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <svg
            className="animate-spin h-10 w-10 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        </div>
      ) : (
        <>
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
                  // onDelete={handleDelete}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default UserList;
