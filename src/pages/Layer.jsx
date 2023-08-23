import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layer() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layer;
