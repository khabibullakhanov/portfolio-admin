import React from 'react'
import { Router } from './Router';
import { useSelector } from "react-redux";
import { Login } from './Pages/Login/Login';
import { Backdrop, CircularProgress } from "@mui/material";


function App() {

  const loading = useSelector((state) => state.reLoading);
  const admin = useSelector((state) => state.admin)

  return (
    <>
      {admin.token ? <Router /> : <Login />}
      <Backdrop sx={{ color: "#fff", zIndex: "99999999999999" }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default App;
