import React, { useState,useEffect } from 'react'
import { getYear } from './services'


const AuthContext = React.createContext({
  isSuperAdmin: false,
  token: '',
  refreshToken: '',
  isLoggedIn: false,
  login: (token, refreshToken) => { },
  logout: () => { },
  setplant: (data) => {},
  plant: "",
  data:"",
  toogle: true,
  setToogle: () => {}, // Add setToogle with a default empty function
})

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token')
  const initialRefreshToken = localStorage.getItem('refreshToken')
  const [token, setToken] = useState(initialToken)
  const [plantType, setPlantType] = useState(0);
  const [data,setdata]=useState()
  const [toogle, setToogle] = useState(true);
  const [refreshToken, setRefreshToken] = useState(initialRefreshToken)
  const userIsLoggedIn = !!token

  const loginHandler = async (token, user, refreshToken, isSuperAdmin) => {
    setToken(token)
    setRefreshToken(refreshToken)
    localStorage.setItem('userdata', JSON.stringify(user))
    localStorage.setItem('token', token)
    localStorage.setItem('refreshToken', refreshToken)
    let year = await getYear();
    localStorage.setItem("form", year?.res?.data[0].year)
  }

  const logoutHandler = () => {
    setToken(null)
    setRefreshToken(null)
    localStorage.removeItem('token')
    localStorage.removeItem('userdata')
    localStorage.removeItem('refreshtoken')
    localStorage.removeItem('isSuperAdmin')
  }

  const setplant = (data) => {
    setPlantType(data);
  };

  const handle = () => {
    setToogle(!toogle);
  };

  const contextValue = {
    token: token,
    refreshToken: refreshToken,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    setplant: setplant,
    plant: plantType,
    handle: handle,
    toogle: toogle,
    setToogle: setToogle, // Include setToogle in the context
    data:data,
    setdata:setdata
  }
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
