import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { formatDate } from "../../utils";

const baseUrl = import.meta.env.VITE_API_URL;

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/internship/applications/${id}`
        );
        setUser(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-white text-7xl">
        Application not found
      </div>
    );

  if (!user)
    return (
      <div className="flex justify-center items-center h-screen">
        No user data found
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <Link
          to="/user"
          className="mb-4 px-4 py-2 bg-black text-white rounded hover:bg-opacity-75"
        >
          All Applicants
        </Link>
        <h1 className="text-2xl font-bold mb-4 mt-4">User Details</h1>
        <p className="mb-2">
          <strong>Name:</strong> {user.full_name}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="mb-2">
          <strong>Birthdate:</strong> {user.birthdate}
        </p>
        <p className="mb-2">
          <strong>Skill:</strong> {user.skill}
        </p>
        <p className="mb-2">
          <strong>About Skill:</strong> {user.about_skill}
        </p>
        <p className="mb-2">
          <strong>Experience:</strong> {user.experience}
        </p>
        <p className="mb-2">
          <strong>Commitment:</strong> {user.commitment ? "Yes" : "No"}
        </p>
        <p className="mb-2">
          <strong>LinkedIn:</strong>{" "}
          <a
            href={user.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {user.linkedin}
          </a>
        </p>
        <p className="mb-2">
          <strong>Twitter Handle:</strong>{" "}
          <a
            href={user.twitter_handle}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {user.twitter_handle}
          </a>
        </p>
        <p className="mb-2">
          <strong>Application Date:</strong> {formatDate(user.date_created)}
        </p>
        <p className="mb-2">
          <strong>Certificate:</strong>{" "}
          {user.certificate ? (
            <a
              href={user.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Certificate
            </a>
          ) : (
            "No certificate available"
          )}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
