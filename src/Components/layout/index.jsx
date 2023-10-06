import React,{useEffect,useState,useContext} from 'react'
import MainWrapper from './MainWrapper'
import Sidenav from './Sidenav'
import AuthContext from '../../Utils/auth-context'

const Layout = () => {
  const { handle, toogle, setToogle } = useContext(AuthContext)

  const [toggle2,setToggle2]=useState(true)
  
  
  const handletoggle=()=>{
    if(toggle2){
      setToogle(!toogle)
    }
    
  }

  // <-----------code to get the current screen size and chnage the toggle of sidebar------------>
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}


  // const width = window.innerWidth;
  useEffect(()=>{
      if(windowSize.innerWidth<963){
        setToogle(false)
        setToggle2(true)
      }
      else if(windowSize.innerWidth>963){
        setToogle(true)
        setToggle2(false)
      }
  },[windowSize.innerWidth])

// <--------End------->


  return (
    <>

      <div className=" d-flex ">
        <div className={toogle ? 'side-nav ' : 'side-nav1'} >
          <Sidenav  toogle={toogle} handletoggle={handletoggle}/>
        </div>
        <div className="page-container" >
          <MainWrapper />
        </div>
      </div>
    </>
  )
}

export default Layout