import companies from "../../Assets/image/icons/Companies.svg";
import approval from "../../Assets/image/icons/checklist.svg";
import checker from "../../Assets/image/icons/Editing.svg";
import settings from "../../Assets/image/icons/Settings.svg";
import user from "../../Assets/image/icons/user.svg";
import black1 from "../../Assets/image/icons/black1.svg";
import black2 from "../../Assets/image/icons/black2.svg";
import black3 from "../../Assets/image/icons/black3.svg";
import accountb from "../../Assets/image/icons/accountb.svg";
import settingsb from "../../Assets/image/icons/settingsb.svg";
import logout from "../../Assets/image/icons/Logout.svg";
import { useEffect } from "react";


// const data = () => {

//   const item = JSON.parse(localStorage.getItem('userdata'))
//   if (item?.Admin === 1) {
//     return true
//   }
//   return false
// }
const SIDEBAR_UL = [
  {
    id: 1,
    label: "Companies",
    ref: "companies",
    path: "/companies",
    src: companies,
    src1:black1
  },
  {
    id: 2,
    label: "Approval Requests",
    ref: "approval",
    path: "/approvalrequests",
    src: approval,
    src1:black2

  },

  {
    id: 3,
    label: "Editing Requests",
    ref: "checker",
    path: "/editingrequests",
    src: checker,
    src1:black3

  },
  {
    id: 4,
    label: "Staff",
    ref: "user",
    path: "/staff",
    src: user,
    src1:accountb

  },
  {
    id: 5,
    label: "Settings",
    ref: "settings",
    path: "/settings",
    src: settings,
    src1:settingsb

  },
]

const SIDEBAR_UL_2 = [
  {
    id: 1,
    label: "Companies",
    ref: "companies",
    path: "/companies",
    src: companies,
    src1:black1

  },
  {
    id: 2,
    label: "Approval Requests",
    ref: "approval",
    path: "/approvalrequests",
    src: approval,
    src1:black2


  },
  // {
  //   id: 3,
  //   label: "User",
  //   ref: "user",
  //   path: "/user",
  //   src: user,

  // },
  {
    id: 3,
    label: "Settings",
    ref: "settings",
    path: "/settings",
    src: settings,
    src1:settingsb


  }
];


export { SIDEBAR_UL, SIDEBAR_UL_2 };