import React from "react";

function InputSearch({ value, setValue, onSearch }) {
  const InputChange = (e) => {
    setValue(e.target.value)
  };

  const handleSearch = () => {
    onSearch(value)
  }
  
  return (
    <div>
      <input
        type="text"
        value={value}
        className="input-search"
        onChange={InputChange}
        placeholder="Search Ksatriya"
      />
      <button
        type="submit"
        className="button-search"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default InputSearch;