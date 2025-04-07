import { useState, useEffect } from "react";
import axios from "axios";
import { showToast } from "../toaster";
import { formatDate } from "../../utils";

const baseUrl = import.meta.env.VITE_API_URL;

const skills = [
  "UI/UX Design",
  "Frontend Development",
  "Backend Development",
  "Product/Project Management",
  "Illustration",
  "Graphic Design",
];

const skillColors = {
  "UI/UX Design": "bg-purple-100 text-purple-800",
  "Frontend Development": "bg-blue-100 text-blue-800",
  "Backend Development": "bg-green-100 text-green-800",
  "Product/Project Management": "bg-yellow-100 text-yellow-800",
  "Illustration": "bg-pink-100 text-pink-800",
  "Graphic Design": "bg-red-100 text-red-800",
};

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [skillFilter, setSkillFilter] = useState("All");
  const [dateSort, setDateSort] = useState("newest");

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await axios.get(`${baseUrl}/internship/applications/`);
        setUsers(userData.data.applications);
        setFilteredUsers(userData.data.applications);
      } catch (error) {
        showToast("An Error occurred", "error");
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    let result = [...users];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(user => 
        user.full_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply skill filter
    if (skillFilter !== "All") {
      result = result.filter(user => user.skill === skillFilter);
    }
    
    // Apply date sorting
    result.sort((a, b) => {
      const dateA = new Date(a.date_created);
      const dateB = new Date(b.date_created);
      return dateSort === "newest" ? dateB - dateA : dateA - dateB;
    });
    
    setFilteredUsers(result);
  }, [searchTerm, skillFilter, dateSort, users]);

  const applicationCount = filteredUsers.length;
  const applicationText =
    applicationCount === 0
      ? "No Applications"
      : applicationCount === 1
      ? "1 Application"
      : `${applicationCount} Applications`;

  return (
    <div className="relative lg:px-[104px] px-[21px] min-h-screen py-8">
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
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Internship Applications</h1>
              <div className="bg-blue-500 text-white p-2 rounded">
                {applicationText}
              </div>
            </div>
            
            {/* Search and Filter Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Search by Name
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search applicants..."
                  className="w-full p-2 border rounded"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="skill-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Filter by Skill
                </label>
                <select
                  id="skill-filter"
                  className="w-full p-2 border rounded"
                  value={skillFilter}
                  onChange={(e) => setSkillFilter(e.target.value)}
                >
                  <option value="All">All Skills</option>
                  {skills.map((skill) => (
                    <option key={skill} value={skill}>
                      {skill}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="date-sort" className="block text-sm font-medium text-gray-700 mb-1">
                  Sort by Date
                </label>
                <select
                  id="date-sort"
                  className="w-full p-2 border rounded"
                  value={dateSort}
                  onChange={(e) => setDateSort(e.target.value)}
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>
            
            {/* Table Section */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Email</th>
                    <th className="py-3 px-4 text-left">Application Date</th>
                    <th className="py-3 px-4 text-left">Skill</th>
                    <th className="py-3 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4">{user.full_name}</td>
                        <td className="py-3 px-4">{user.email}</td>
                        <td className="py-3 px-4">{formatDate(user.date_created)}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${skillColors[user.skill] || 'bg-gray-100 text-gray-800'}`}>
                            {user.skill}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <a 
                            href={`/application/${user.id}`}
                            className="text-blue-500 hover:text-blue-700 font-medium"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="py-4 px-4 text-center text-gray-500">
                        No applications found matching your criteria
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserList;