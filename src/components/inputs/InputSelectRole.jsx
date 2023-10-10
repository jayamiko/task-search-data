import React from "react";
import { selectionUniqueData } from "../../services/uniqueData";

function InputSelectRole({ roles, onSelect }) {
  const handleRoleSelect = (event) => {
    const selectedRole = event.target.value;
    onSelect(selectedRole); 
  };

  return (
    <select name="roleFilter" id="roleFilter" onChange={handleRoleSelect}>
      <option value="all">All Role</option>
      {selectionUniqueData(roles).map((role, index) => {
        return (
          <option key={index} value={role}>
            {role}
          </option>
        );
      })}
    </select>
  );
}

export default InputSelectRole;