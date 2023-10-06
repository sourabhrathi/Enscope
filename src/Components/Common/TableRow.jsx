import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TableRow({ editid, seteditid, item, index, onDelete }) {
  const [isEditing, setIsEditing] = useState(editid === item.id ? true : false);
  const [rowData, setRowData] = useState(item);
  const [editshow, seteditshow] = useState(false)

  function handleInputChange(event) {
    const { name, value } = event.target;
    setRowData({ ...rowData, [name]: value });
  }

  const handleSaveClick = async () => {
    seteditid(0)
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete()
  };

  const sendprops = {
    id: rowData.id,
    name: rowData.name,
    unit: rowData.unit,
    value: rowData.value,
    scope_type: rowData.scope_type,
    category: rowData.category,
  };

  const navigate = useNavigate();
  const handleedit = (e) => {
    navigate('/editmeterial', { state: { props: sendprops } })
    seteditshow(true)
  }

  if (isEditing) {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>
          <input
            name="name"
            className="text-center"
            value={rowData?.name}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <input
            name="value"
            className="text-center"
            value={rowData?.value}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <input
            name="unit"
            className="text-center"
            value={rowData?.unit}
            onChange={handleInputChange}
          />
        </td>
        <td className="p-2 d-flex text-center align-items-center justify-content-center">
          <button className="edit-btn-table text-center btnsz" onClick={handleSaveClick}>
            Save
          </button>
          <button className="edit-btn-table ms-3 text-center btnsz" onClick={handleDelete}>
            <span className="px-2">Delete</span>
          </button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td className=" text-center">
        <input
          name="name"
          className="rowInput text-center"
          value={rowData?.name}
          disabled={!editshow}
        />
      </td>
      <td className="text-center">
        <input
          name="value"
          className="rowInput text-center"
          value={rowData?.value}
          disabled={!editshow}
        />
      </td>
      <td className=" text-center">
        <input
          name="unit"
          className="rowInput text-center"
          value={rowData?.unit}
          disabled={!editshow}
        />
      </td>

      <td className=" d-flex text-center align-items-center justify-content-center">
        {item.id ? (
          <>
            <button className="edit-btn-table text-center btnsz" onClick={() => handleedit(rowData.id)}>
              Edit
            </button>
            <button className="edit-btn-table flex items-center ms-3 text-center btnsz" onClick={handleDelete}>
              <span className="px-2">Delete</span>
            </button>
          </>
        ) : (
          <button className="edit-btn-table text-center" onClick={handleSaveClick}>
            Save
          </button>
        )}
      </td>
    </tr>
  );
}

export default TableRow;