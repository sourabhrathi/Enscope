import React, { useContext, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import Pending from '../../Pages/ApprovalRequest/Approved/Pending';
import ApprovalRequests from '../../Pages/ApprovalRequest/pendingandrejected/ApprovalRequests';
import Rejected from '../../Pages/ApprovalRequest/pendingandrejected/Rejected';
import RejectedbySa from '../../Pages/ApprovalRequest/pendingandrejected/RejectedbySa';
import Sapending from '../../Pages/ApprovalRequest/pendingandrejected/Sapending';
import Cema from '../../Pages/Companies/CEMA';
import Companies from '../../Pages/Companies/Companies';
import DataView from '../../Pages/Companies/DataView';
import ScopeOne from '../../Pages/Companies/Scope_1';
import ChemicalAndCumbustion from '../../Pages/Companies/Scope_1/ChemicalAndCumbustion';
import MobileCombustion from '../../Pages/Companies/Scope_1/MobileCombustion';
import StationayCombustion from '../../Pages/Companies/Scope_1/StationayCombustion';
import ScopeTwo from '../../Pages/Companies/Scope_2';
import Cooling from '../../Pages/Companies/Scope_2/Cooling';
import Electricity from '../../Pages/Companies/Scope_2/Electricity';
import Steam_Heat from '../../Pages/Companies/Scope_2/Steam_Heat';
import ScopeThree from '../../Pages/Companies/Scope_3';
import RowMaterial from '../../Pages/Companies/Scope_3/RowMaterial';
import EditingRequests from '../../Pages/EditingRequests/EditingRequests';
import Settings from '../../Pages/Setting/Settings';
import Scope from '../../Pages/Setting/Scope';
import User from '../../Pages/User';
import Edituser from '../../Pages/User/Edituser';
import Editmeterial from '../../Pages/Setting/Editmeterial';
import Innerroutes from './innerroutes';


function MainWrapper() {



  return (
    <div>
      <Routes>
        <Route path="/" element={<Companies />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/approvalrequests" element={<ApprovalRequests />} />
        <Route path="/sapending" element={<Sapending />} />
        <Route path="/rejected" element={<Rejected />} />
        <Route path="/rejectedbysa" element={<RejectedbySa />} />
        <Route path="/pending" element={<Pending />} />
        <Route exact path="/new-assessment/scope-one" element={<ScopeOne />} />
        <Route exact path="/new-assessment/scope-one/stationary-combustion" element={<StationayCombustion />} />
        <Route exact path="/new-assessment/scope-one/mobile-combustion" element={<MobileCombustion />} />
        <Route exact path="/new-assessment/scope-one/chemical-and-gas" element={<ChemicalAndCumbustion />} />
        <Route exact path="/new-assessment/scope-two" element={<ScopeTwo />} />
        <Route exact path="/new-assessment/scope-two/electricity" element={<Electricity />} />
        <Route exact path="/new-assessment/scope-two/steam_&_heat" element={<Steam_Heat />} />
        <Route exact path="/new-assessment/scope-two/cooling" element={<Cooling />} />
        <Route exact path="/new-assessment/scope-three" element={<ScopeThree />} />
        <Route exact path="/new-assessment/scope-three/*" element={<Innerroutes/>} />
        <Route exact path="/new-assessment/cema" element={<Cema />} />
        <Route path="/editingrequests" element={<EditingRequests />} /> 
        <Route path="/staff" element={<User/>}/>
        <Route path="/settings" element={<Settings />} />
        <Route path="/scope" element={<Scope />} />
        <Route path="/dataview/:id" element={<DataView />} />
        <Route path="/edituser" element={<Edituser/>}/>
        <Route path="/editmeterial" element={<Editmeterial/>}/>
        <Route path="/*" element="not found" />
      </Routes>
    </div>
  )
}
export default MainWrapper 