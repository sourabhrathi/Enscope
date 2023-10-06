import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { parseISO, format } from 'date-fns';

function Usertable({ editid, seteditid, item, index, onDelete ,check}) {
  const navigate = useNavigate()
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
    // onDelete();
  };
  const sendprops = {
    id: rowData.id,
    name: rowData.name,
    mobile_no: rowData.mobile_no,
    isAdmin: rowData.isAdmin,
    email: rowData.email,
    joineddate: rowData.joineddate,
  };

  const handlenavigate = (e) => {
    navigate('/edituser', { state: { props: sendprops } })
    seteditshow(true)
  }

  return (
    // <form>
    <tr>
      <td className=" text-center">{index + 1}</td>
      <td className=" text-center">
        <input
          name="name"
          className="rowInput text-center"
          value={rowData?.name}
          disabled={!editshow}
        />
      </td>

      <td className=" text-center">
        <input
          name="mobile_no"
          className="rowInput text-center"
          value={rowData?.mobile_no}
          disabled={!editshow}
        />
      </td>

      <td className="text-center">
        <input
          name="isAdmin"
          className="rowInput text-center"
          value={rowData?.isAdmin === 1 ? "Super Admin" : "QC Admin"}
          disabled={!editshow}
        />
      </td>

      <td className="text-center planttble">
        <input
          name="email"
          className="rowInput text-center"
          value={rowData?.email}
          disabled={!editshow}
        />
      </td>

      <td>
        <input
          name="joineddate"
          className="rowInput text-center"
          value={format(parseISO(rowData?.created_at), 'dd:MM:yyyy')}
          disabled={!editshow}
        />
      </td>

      <td className=" d-flex text-center align-items-center justify-content-center">
        <>
          <button className="edit-btn-table text-center  " onClick={() => handlenavigate()}>
            Edit
          </button>
          <button className="edit-btn-table flex items-center text-center  ms-3" onClick={handleDelete}>
            <span className="px-2">Deactivate</span>
          </button>
        </>
      </td>
    </tr>
    // </form>
  );
}

export default Usertable;