import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image404 from "@assets/images/404.jpg";

const NotFound = () => {
  return (
    <div className="error_page">
      <div
        className="kiamaPage bg-image"
        style={{
          backgroundImage: `url(${Image404})`,
        }}
      >
        <div className="content">
          <h1 data-aos="fade-up" data-aos-duration="1200">
            404!
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
            The page you are looking for could not be found.
          </p>

          <div
            className="button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Link to="/">BACK TO HOME</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
