import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";

import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./pages/Project/ProjectDetails";
import IssueDetails from "./pages/Issue/IssueDetails";
import Auth from "./pages/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/Auth/Action";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getUser(auth.jwt || localStorage.getItem("jwt")));
  }, [auth.jwt]);

  return (
    <>
      {auth.user ? ( //set to false to trigger authentication
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route
              path="/project/:projectId/issue/:issueId"
              element={<IssueDetails />}
            />
          </Routes>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
