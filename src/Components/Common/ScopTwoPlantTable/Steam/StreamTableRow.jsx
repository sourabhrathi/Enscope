import React, { useState } from "react";

function StreamTableRow({ data, index }) {
  const [isEditing, setIsEditing] = useState(false);
  const [rowData, setRowData] = useState(data);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setRowData({ ...rowData, [name]: value });
  }

  if (isEditing) {
    return (
      <tr>
        <td>{index + 1}</td>
        <td><input name="source_name" value={rowData.source_name} onChange={handleInputChange} /></td>
        <td><input name="consumed_power" value={rowData.consumed_power} onChange={handleInputChange} /></td>
        <td><button className="edit-btn-table">Save</button></td>
      </tr>
    );
  }

  return (
    <tr>
      <td className="p-2">{index + 1}</td>
      <td className="p-2"><input name="source_name" className="rowInput" value={rowData.source_name} disabled /></td>
      <td className="p-2"><input className="rowInput" name="consumed_power" value={rowData.consumed_power} disabled /></td>
      <td className="p-2"><button className="edit-btn-table" onClick={() => setIsEditing(true)}>Edit</button></td>
    </tr>
  );
}

export default StreamTableRow;
