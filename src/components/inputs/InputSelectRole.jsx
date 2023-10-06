import React from "react";
import { selectionUniqueData } from "../../services/uniqueData";

function InputSelectRole({ roles }) {
  return (
    <select name="cars" id="cars">
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
