import { useState } from "react";
import { toast } from "react-toastify";
// import { AddAsssessmenttwo } from "../../../Utils/services";


function TableRow() {
    // const [isEditing, setIsEditing] = useState(false);
    // const [rowData, setRowData] = useState(data);

    // function handleInputChange(event) {
    //     const { name, value } = event.target;
    //     setRowData({ ...rowData, [name]: value });
    // }



    // if (isEditing) {
    //     return (
    //         <tr>
    //             <td>
    //                 {index + 1}
    //             </td>
    //             <td>
    //                 <input name="source_name" value={rowData.created_on} disabled />
    //             </td>
    //             <td>
    //                 <input name="source_name" value={rowData.source_name} onChange={handleInputChange} />
    //             </td>
    //             <td>
    //                 <input name="consumed_power" value={rowData.lastName} onChange={handleInputChange} />
    //             </td>
    //             <td>
    //                 <button className="edit-btn-table" >Save</button>
    //             </td>
    //         </tr>
    //     );
    // }


    return (
        <>
            <tr>
                <td className="p-2"> 1  </td>
                <td> April 2020  </td>
                <td>  XYZ </td>
                <td>  100 <span style={{ fontSize: '14px', color: '#A2A2A2' }}>KWh</span> </td>
                {/* <td className="p-2">
                <input name="source_name" className="rowInput" disabled value="April 2020"/>
            </td>
            <td className="p-2 "><input className="rowInput" name="source_name" disabled />XYZ</td>
            <td className="p-2"><input className="rowInput" name="consumed_power"  />100<span style={{fontSize:'14px',color:'#A2A2A2'}}>KWh</span></td>
            */}
                <td className="p-2">
                    <button className="edit-btn-table" >Edit</button>
                </td>
            </tr>
            <tr>
                <td className="p-2"> 1  </td>
                <td> April 2020  </td>
                <td>  XYZ </td>
                <td>  100 <span style={{ fontSize: '14px', color: '#A2A2A2' }}>KWh</span> </td>
                <td className="p-2">
                    <button className="edit-btn-table" >Edit</button>
                </td>
            </tr>

            <tr>
                <td className="p-2"> 1  </td>
                <td> April 2020  </td>
                <td>  XYZ </td>
                <td>  100 <span style={{ fontSize: '14px', color: '#A2A2A2' }}>KWh</span> </td>
                <td className="p-2">
                    <button className="edit-btn-table" >Edit</button>
                </td>
            </tr>

            <tr>
                <td className="p-2"> 1  </td>
                <td> April 2020  </td>
                <td>  XYZ </td>
                <td>  100 <span style={{ fontSize: '14px', color: '#A2A2A2' }}>KWh</span> </td>
                <td className="p-2">
                    <button className="edit-btn-table" >Edit</button>
                </td>
            </tr>
        </>
    );
}

export default TableRow;
