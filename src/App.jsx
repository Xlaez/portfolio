import React, { useEffect } from "react";
import ScrollToTop from "@common/ScrollToTop";
import AllRoutes from "@router/Router";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <AllRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
