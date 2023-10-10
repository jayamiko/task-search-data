import React from "react";
import "./App.css";
import InputSearch from "./components/inputs/InputSearch";
import DataTable from "./components/tables/DataTable";
import { getKsatriyas, getKsatriyas2 } from "./api/dataGetRequests";
import InputSelectRole from "./components/inputs/InputSelectRole";

function App() {
  const [dataKsatriya, setDataKsatriya] = React.useState([]);
  const [dataKsatriya2, setDataKsatriya2] = React.useState([]);
  const [filteredName, setFilteredName] = React.useState([]);
  const [selectedRole, setSelectedRole] = React.useState("all");
  const [value, setValue] = React.useState("");
  const roles = dataKsatriya.map((item) => item.attributes.role);

  React.useEffect(() => {
    getKsatriyas(setDataKsatriya);
  }, []);

  React.useEffect(() => {
    getKsatriyas2(setDataKsatriya2);
  }, []);
  console.log(dataKsatriya2);

  const allKsatriya = dataKsatriya.concat(dataKsatriya2);

  const filterData = (key) => {
    const filtered = allKsatriya.filter((item) =>
      item.attributes.name.toLowerCase().startsWith(key.toLowerCase()) &&
      (selectedRole === "all" || item.attributes.role.toLowerCase() === selectedRole.toLowerCase())
    );
    setFilteredName(filtered);
  };

  function dataLogic() { 
   return selectedRole === "all" ? filteredName.length > 0 ? filteredName : allKsatriya
      : filteredName.length > 0
      ? filteredName.filter(
          (item) => textToLowerCase(item.attributes.role) === textToLowerCase(selectedRole)
        )
      : allKsatriya.filter(
          (item) => textToLowerCase(item.attributes.role) === textToLowerCase(selectedRole)
      )
  }

  function textToLowerCase(text) {
    return text.toLowerCase()
  }

  return (
    <div className="container">
      <InputSearch 
        value={value} 
        setValue={setValue}
        onSearch={filterData} />

      {/* DATA TABLE */}
      <div style={{ marginTop: "100px" }}>
        <InputSelectRole roles={roles} onSelect={(role) => setSelectedRole(role)} />
        <DataTable data={dataLogic()}
        />
      </div>
    </div>
  );
}

export default App;