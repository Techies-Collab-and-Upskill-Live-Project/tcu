import { useState } from "react";
import { Link } from "react-router-dom";

const DisplayUser = ({
  index,
  id,
  name,
  email,
  skill,
  applicationDate,
  //   onDelete,
}) => {
  return (
    <div>
      <h1 className="text-white">Applicant {index + 1}</h1>
      <div className="text-white border p-2">
        <div>
          <h3>Name:{name}</h3>
          <h4>Email: {email}</h4>
          <h5>Skill: {skill}</h5>
          <h6>Application Date: {applicationDate}</h6>
        </div>
        <div className="flex justify-between mt-2">
          <Link to={`/application/${id}`}>
            <button className="bg-blue-500 text-white p-1 rounded">View</button>
          </Link>
          {/* <button
            className="bg-red-500 text-white p-1 rounded"
            onClick={() => onDelete(id, index)}
          >
            Delete
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default DisplayUser;
