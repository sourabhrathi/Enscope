import React, { useEffect, useState, useContext } from "react";
import { filterAdminScope2 } from '../../../../Utils/services';
import AuthContext from '../../../../Utils/auth-context';


function SteamPlantTable() {
  const [rowData, setRowData] = useState([]);
  const authCtx = useContext(AuthContext);
  const id = localStorage.getItem("setid");

  const viewdata = async () => {
    if(authCtx?.data){
console.log(authCtx?.data,"rathi");
    const data = {
      "assessment_year":authCtx?.data,
      "category": 'Steam',
      "user_id": id,
      "plant_type": authCtx?.plant
    };

    try {
      const result = await filterAdminScope2(data);
      setRowData(result?.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setRowData([]);
    }
  }
  };

  useEffect(() => {
    viewdata();
  }, [authCtx?.plant,authCtx?.data]);

  return (
    <>
      <div className='plant-table pt-20'>
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Month</th>
              <th>Source of Steam</th>
              <th>Steam Consumed</th>
         
            </tr>
          </thead>
          <tbody>
            {rowData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.created_on}</td>
                <td>{item?.source_name}</td>
                <td>
                  {item?.consumed_power} <span style={{ color: '#A2A2A2', fontSize: '14px' }}>{item?.unit}</span>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div></>

  );
}

export default SteamPlantTable;