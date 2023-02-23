import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, NewsPage, ProfilePage } from "./pages";
import { Box } from "@mui/material";
import { PrivateRoute, NavBar } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <Box sx={{ mt: 8 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Box>
    </>
  );
}

export default App;
