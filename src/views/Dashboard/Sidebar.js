import React, { useRef, useEffect } from "react";
import PersonalDetails from "../../components/PersonalDetails";
import Menu from "../../components/Menu";
import "./Dashboard.scss";

const Sidebar = () => {
  const navRef = useRef();
  const handleMenuClick = () => {
    // if (navRef.current.classList.contains("displaynone")) {
    //   navRef.current.classList.remove("displaynone");
    // }
    navRef.current.classList.toggle("displaynone");
  };
  const handleClickOutside = (event) => {
    // if (!navRef.current.contains(event.target)) {
    //   navRef.current.classList.remove("displaynone");
    // }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="dashboard_sidebar">
      <div className="user_header">
        <span>USERS</span>
        <Menu handleMenuClick={handleMenuClick} />
      </div>
      <div ref={navRef} className="user_details">
        <PersonalDetails classes="horinzontal " />
        <PersonalDetails classes="horinzontal " />
        <PersonalDetails classes="horinzontal " />
        <PersonalDetails classes="horinzontal " />
        <PersonalDetails classes="horinzontal " />
        <PersonalDetails classes="horinzontal " />
      </div>
    </div>
  );
};

export default Sidebar;
