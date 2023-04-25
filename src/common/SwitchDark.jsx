import React, { useState } from "react";
import lightImage from "@assets/images/sun.png";

const SwitchDark = () => {
  const [isDark, setIsDark] = useState(false);

  React.useEffect(() => {
    const themeColor = localStorage.getItem("kiama-theme");
    document.querySelector("body").classList.add(themeColor);
    setIsDark(themeColor === "light" ? true : false);
  }, []);

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("kiama-theme", "dark");
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.remove("light");
      setIsDark(false);
    } else {
      localStorage.setItem("kiama-theme", "light");
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
      setIsDark(true);
    }
  };

  return (
    <label className={`theme-switcher-label d-flex  ${isDark ? "active" : ""}`}>
      <input
        type="checkbox"
        onClick={handleLabelClick}
        className="theme-switcher"
      />
      <div className="switch-handle">
        <span className="light-text">
          <img src={lightImage} alt="swicher" className="filter_1" />
        </span>
        <span className="dark-text">
          <i className="fa fa-moon-o" aria-hidden="true"></i>
        </span>
      </div>
    </label>
  );
};

export default SwitchDark;
