import React from "react";
import "./PersonalDetails.scss";
import avater from "../../assets/Vector.png";
import RightArrow from "./RightArrow";

const PersonalDetails = ({ classes }) => {
  return (
    <div className={`personaldetails ${classes} `}>
      <div className="personaldetails_img">
        <img src={avater} alt="" />
      </div>
      <div className="personaldetails_info">
        <div className="personaldetails_info_name">
          <span>Jude Agboola</span>
        </div>
        <div className="personaldetails_info_transaction">
          <span> 300 Transaction</span> <div className="joined"></div>
          <span>Joined 2 months ago</span>
        </div>
      </div>
      <RightArrow clases={classes} />
    </div>
  );
};

export default PersonalDetails;
