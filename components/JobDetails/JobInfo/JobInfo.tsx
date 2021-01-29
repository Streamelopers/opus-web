import React from "react";
import "./JobInfo.scss";

const JobInfo = () => {
  return (
    <div>
      <div className="job-info">
        <div className="container">
          <div className="location">
            <label>Location</label>
            <p>San Mateo, CA, USA, Remote</p>
          </div>
          <div className="job-type">
            <label>Job type</label>
            <p>Full-time</p>
          </div>
          <div className="salary">
            <label>Salary</label>
            <p>USD 120000</p>
          </div>
          <div className="Posted">
            <label>Posted</label>
            <p>1 week ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
