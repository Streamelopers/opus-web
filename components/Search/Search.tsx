import React from "react";

const Search = () => {
  return (
    <div className="search-container">
      <span className="legend">
        <img src="https://api.iconify.design/ic:round-search.svg" alt="Search icon" />
        Filter by
      </span>
      <div className="input-container">
        <input className="form-control" type="search" placeholder="Keywords, location, job type..." />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search!
        </button>
      </div>
    </div>
  );
};

export default Search;
