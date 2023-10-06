import React, { useContext, useEffect } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './layout';
import { ToastContainer } from 'react-toastify';
import Login from '../Pages/Login';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../Utils/auth-context';
import { YearCurrent } from '../Utils/services';

const App = () => {
  const authCtx = useContext(AuthContext)

  const showdata = async () => {
    const result = await YearCurrent()
    authCtx.setdata(result?.res?.data[0].year)
  
}

useEffect(() => {
    showdata();
}, [])
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <BrowserRouter>
        <Routes>
          {authCtx.isLoggedIn ? (
            <Route path="/*" element={<Layout />} />
          ) : (
            <Route exact path="/login" element={<Login />} />
          )}
          <Route
            path="*"
            element={<Navigate to={authCtx.isLoggedIn ? '/' : '/login'} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App