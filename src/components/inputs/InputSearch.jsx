import React from "react";

function InputSearch({ value, setValue }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        className="input-search"
        // onChange={}
        placeholder="Search Item"
      />
      <button
        type="submit"
        className="button-search"
        //   onSubmit={}
      >
        Search
      </button>
    </div>
  );
}

export default InputSearch;
