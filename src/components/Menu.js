import React from "react";

const Menu = ({ handleMenuClick }) => {
  return (
    <svg
      width="36"
      height="20"
      viewBox="0 0 36 28"
      onClick={handleMenuClick}
      fill="#2b2e5b"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" width="22.2857" height="3.32258" fill="" />
      <rect x="1" y="21.6774" width="36" height="3.32258" fill="" />
      <rect x="1" y="10.8387" width="27.8571" height="3.32258" fill="" />
    </svg>
  );
};

export default Menu;
