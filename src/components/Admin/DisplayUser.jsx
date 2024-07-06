import { useState } from "react";

const DisplayUser = ({ key, name, email, skill, }) => {
  return (
    <div>
      <h1>User</h1>

      <div className="text-white border p-2">
        <div>
          <h3>Name:{name}</h3>
          <h4>Email: {email}</h4>
          <h5>{skill}</h5>
          {/* <h5>Skill: {item.skill}</h5> */}
        </div>
      </div>
    </div>
  );
};

export default DisplayUser;
