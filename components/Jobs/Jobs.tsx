import React from "react";
import Search from "../Search/Search";
import JobCard from "../JobCard/JobCard";

const Jobs = () => {
  return (
    <div>
      <div className="search">
        <Search />
      </div>
      <div className="jobs">
        <JobCard />
      </div>
    </div>
  );
};

export default Jobs;
