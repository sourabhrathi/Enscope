import React from "react";
import Rejectedqcadmin from "../commoncomonent/Rejectedqcadmin";
import Rejectedsuperadmin from "../commoncomonent/Rejectedsuperadmin";
import Pendingrequest from "./Pendingrequest";
import RejectedbothSQ from "../commoncomonent/RejectedbothSQ";

const Superadmin = (props) => {
  const data = () => {
    const item = JSON.parse(localStorage.getItem("userdata"));
    if (item.Admin === 2) {
      return true;
    }
    return false;
  };

  return (
    <div className="">
      {data() ? (
        <>
          <p className="padtop" style={{ color: "#1E1E1E", fontSize: "16px",fontWeight:500 }}>
            Rejected by Super Admin
          </p>
          <Rejectedsuperadmin inputValue={props.inputValue} />

          <p className="paddtop" style={{ color: "#1E1E1E", fontSize: "16px" ,fontWeight:500}}>
            Rejected by Q.C Admin
          </p>
          <Rejectedqcadmin inputValue={props.inputValue}/>
        </>
      ) : (
        <>
          <p className="paddtop" style={{ color: "#1E1E1E", fontSize: "16px" ,fontWeight:500}}>
            Rejected
          </p>
          <Rejectedsuperadmin inputValue={props.inputValue} />
        </>
      )}

      <p className="paddtop" style={{ color: "#1E1E1E", fontSize: "16px" ,fontWeight:500}}>
        Pending
      </p>
      <Pendingrequest inputValue={props.inputValue}/>
    </div>
  );
};

export default Superadmin;
