import React from "react";
import "./App.css";
import InputSearch from "./components/inputs/InputSearch";
import DataTable from "./components/tables/DataTable";
import { getKsatriyas, getKsatriyas2 } from "./api/dataGetRequests";
import InputSelectRole from "./components/inputs/InputSelectRole";

function App() {
  const [dataKsatriya, setDataKsatriya] = React.useState([]);
  const [dataKsatriya2, setDataKsatriya2] = React.useState([]);
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

  return (
    <div className="container">
      <InputSearch value={value} setValue={setValue} />

      {/* DATA TABLE */}
      <div style={{ marginTop: "100px" }}>
        <InputSelectRole roles={roles} />
        <DataTable data={allKsatriya} />
      </div>
    </div>
  );
}

export default App;
