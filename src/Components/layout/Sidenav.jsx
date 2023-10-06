import React, { useContext, useEffect, useState } from "react";
import { SIDEBAR_UL, SIDEBAR_UL_2 } from "./sidebarList";
import { Link } from "react-router-dom";
import enscope from "../../Assets/image/Logos/new_logo.png";
import logout from "../../Assets/image/icons/Logout.svg";
import AuthContext from "../../Utils/auth-context";

const Sidebar = ({toggle, handletoggle}) => {
  const [activeLink, setActiveLink] = useState(0);
  const [listShow, setListShow] = useState({});
  const [buttonid, setButtonId] = useState(-1);

  useEffect(() => {
    const storedActiveLink = localStorage.getItem("activeLink");
    if (storedActiveLink !== null) {
      setActiveLink(Number(storedActiveLink));
    }
  }, []);

  const listHandler = (id, sublist, listRef) => {
    setActiveLink(id);
    setListShow(prevListShow => ({
      ...prevListShow,
      [listRef]: !prevListShow[listRef]
    }));
    localStorage.setItem("activeLink", id);
  };

  const authCtx = useContext(AuthContext);

  const handlePage = () => {
    authCtx.logout();
  };

  const handle = () => {
    handletoggle();
}



  const [data, setdata] = useState(SIDEBAR_UL_2);
  const item = JSON.parse(localStorage.getItem("userdata"));

  useEffect(() => {
    item?.Admin === 1 ? setdata(SIDEBAR_UL) : setdata(SIDEBAR_UL_2);
  }, [item]);

  return (
<>
<div onClick={()=>handle()}>
<div style={{position:'relative'}}>
          <div className="menuhead  web_visi" style={{padding:'52px'}}>
          <img src={enscope} alt="..." />
        </div>
 <div >
         <div className='mobile_visi items-center' style={{padding:'52px'}}>
                <div className='menuhead'>
                    <img src={enscope} alt="" />
               </div>
             <div id='hamburger-1'
                    className={`hamburger ${toggle ? '' : 'is-active'}`}
                    style={{position:'absolute',right:'20px',top:'67px'}}
                    onClick={handletoggle}
                >
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>

                </div>
            </div>
          
            </div>
  <ul className="side-menu px-4">
    {data.map((list, id) => {
      let sublist = list.sublist;
      let listRef = list.ref;
      let labelText = list.label;
      let path = list.path;
      let src = list.src;
      let src1 = list.src1;
      return (
        <React.Fragment key={list.id}>
          <li
            id={id}
            onMouseEnter={() => {
              setButtonId(id);
            }}
            onMouseLeave={() => {
              setButtonId(-1);
            }}
          >
            <Link
              to={`${path}`}
              onClick={() => {
                listHandler(id, sublist, listRef);
                setButtonId(id);
              }}
              className={
                activeLink === id
                  ? "active flex items-center justify-between px-2 rounded"
                  : "flex items-center justify-between px-2 rounded"
              }
            >
              <div className="navIcon flex items-center">
                <div className="imagelogo">
                  <img
                    src={
                      activeLink === id
                        ? src
                        : id === buttonid
                        ? src1
                        : src
                    }
                    alt=""
                  />
                </div>
                <p className={activeLink === id ? "font-medium" : ""}>
                  {labelText}
                </p>
              </div>
            </Link>
          </li>
        </React.Fragment>
      );
    })}
  </ul>
</div>

<div
  className="flex items-center logout pt-full rounded"
  onClick={handlePage}
>
  <img src={logout} className="imagelogo" alt="..." />
  <p>Logout</p>
</div>
</div>
</>
  );
};

export default Sidebar;
