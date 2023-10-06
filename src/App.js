import React from "react";
import "./App.css";
import InputSearch from "./components/inputs/InputSearch";
import DataTable from "./components/tables/DataTable";
import { getKsatriyas } from "./api/dataGetRequests";

function App() {
  const [dataKsatriya, setDataKsatriya] = React.useState([]);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    getKsatriyas(setDataKsatriya);
  }, []);

  return (
    <div className="container">
      <InputSearch value={value} setValue={setValue} />

      {/* DATA TABLE */}
      <DataTable data={dataKsatriya} />
    </div>
  );
}

export default App;
