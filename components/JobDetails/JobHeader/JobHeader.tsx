import React from "react";
import "./JobHeader.scss";

const JobHeader = () => {
  return (
    <div className="job-header container">
      <div className="company-logo">
        <img alt="a" src="https://vuejobs.com/storage/avatars/EdCT23eseZfVDNWAwfm9xjTRxvc1bY0kZB6hzs1p.png" />
      </div>
      <div className="company-details">
        <h2>Frontend Developer</h2>
        <span>at</span>
        <span>Teamwork.com</span>
        <span>-</span>
        {/* <a href="#">Visit company website</a> */}
      </div>
    </div>
  );
};

export default JobHeader;
