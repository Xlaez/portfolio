import React from "react";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "@common/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollTopBehaviour>
    </>
  );
};

export default AllRoutes;
