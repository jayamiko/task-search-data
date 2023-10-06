import React from "react";

function DataTable({ data }) {
  const headNames = ["KSA ID", "Ksatriya Name", "Image", "Role", "Difficulty"];
  return (
    <div className="datatable">
      <table className="table">
        <thead>
          <tr>
            {headNames.map((ksa, i) => {
              return <th scope="col">{ksa}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={i}>
                <th scope="row">{item.id}</th>
                <td>{item.attributes.name}</td>
                <td>{item.attributes.image.data.attributes.url}</td>
                <td>{item.attributes.role}</td>
                <td>{item.attributes.difficulty}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
