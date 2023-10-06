import React , { useEffect, useState ,useContext} from "react";
import { filterAdminCema } from "../../Utils/services";
import AuthContext from '../../Utils/auth-context';

const CemaTable = () => {
  const [rowData, setRowData] = useState([]);
  const authCtx = useContext(AuthContext);
  const id = localStorage.getItem("setid");

  const viewdata = async () => {
    if(authCtx?.data){
    const data = {
      "assessment_year":authCtx?.data,
      "category": "cema",
      "user_id": id,
    };

    try {
      const result = await filterAdminCema(data);
      // console.log(result.data,"datasdkm");
      setRowData(result?.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setRowData([]);
    }
  }
  };

  useEffect(() => {
    viewdata();
  }, [authCtx?.data]);

  return (
    <div>
       <div className="plant-table mt-4" style={{ height: '600px' }} >
      <table class="w-100  table-theme-1">
        <thead >
          <tr>
          <th> S.No. </th>
            <th> Carbon Emission Mitigation Actions </th>
            <th> Quantity</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item?.carbon_emission}</td>
              <td>{item?.quantity}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default CemaTable;