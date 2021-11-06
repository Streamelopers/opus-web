import React from "react";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";

import SearchTab from "../sections/search/SearchTab";

const defaultCountries = [
  { value: "sp", label: "Singapore" },
  { value: "bd", label: "Bangladesh" },
  { value: "usa", label: "United States of America" },
  { value: "uae", label: "United Arab Emirates" },
  { value: "pk", label: "Pakistan" },
];

const defaultJobTypes = [
  { value: "ft", label: "Full Time" },
  { value: "pt", label: "Part Time" },
  { value: "remote", label: "Remote" },
  { value: "contract", label: "Contract" },
];
const defaultSalaryRange = [
  { value: "5k", label: "< 5k" },
  { value: "5k10k", label: "5k - 10k" },
  { value: "10k20k", label: "10k - 20k" },
  { value: "20k", label: "> 20k" },
];
const defaultExpLevels = [
  { value: "entry", label: "Entry" },
  { value: "jn", label: "Junior" },
  { value: "mid", label: "Mid Level" },
  { value: "sr", label: "Sinior" },
];

const defaultPostedTimes = [
  { value: "jan", label: "January" },
  { value: "May", label: "May" },
  { value: "Jul", label: "July" },
  { value: "Oct", label: "October" },
];

const SearchGrid = () => {
  return (
    <>
      <PageWrapper>
        <div className="bg-black-2 mt-15 mt-lg-22 pt-18 pt-lg-13 pb-13">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* <!-- form --> */}
                <form className="search-form">
                  <div className="filter-search-form-2 bg-white rounded-sm shadow-7 pr-6 py-7 pl-6  search-1-adjustment">
                    <div className="filter-inputs">
                      <div className="form-group position-relative w-xl-50">
                        <input
                          className="form-control focus-reset pl-13"
                          type="text"
                          id="keyword"
                          placeholder="Type Job title, keywords"
                        />
                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                        </span>
                      </div>
                      {/* <!-- .select-city starts --> */}
                      <div className="form-group position-relative w-lg-50">
                        <Select
                          options={defaultCountries}
                          className="pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100"
                          border={false}
                        />
                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-pin-3 text-primary font-weight-bold"></i>
                        </span>
                      </div>
                      {/* <!-- ./select-city ends --> */}
                    </div>
                    <div className="button-block">
                      <button className="btn btn-primary btn-medium line-height-reset h-100 btn-submit w-100 text-uppercase">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-default-1 pt-9 pb-13 pb-xl-30 pb-13 position-relative overflow-hidden">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 col-xl-12">
                <h2 className="font-size-8 mb-6">
                  You’re searching "UI Designer"
                </h2>
                <form className="mb-8">
                  <div className="search-filter from-group d-flex align-items-center flex-wrap">
                    <div className="mr-5 mb-5">
                      <Select
                        options={defaultJobTypes}
                        className="font-size-4"
                        // border={false}
                        css={`
                          min-width: 175px;
                        `}
                      />
                    </div>
                    <div className="mr-5 mb-5">
                      <Select
                        options={defaultSalaryRange}
                        className="font-size-4"
                        // border={false}
                        css={`
                          min-width: 175px;
                        `}
                      />
                    </div>
                    <div className="mr-5 mb-5">
                      <Select
                        options={defaultExpLevels}
                        className="font-size-4"
                        // border={false}
                        css={`
                          min-width: 175px;
                        `}
                      />
                    </div>
                    <div className="mr-5 mb-5">
                      <Select
                        options={defaultPostedTimes}
                        className="font-size-4"
                        // border={false}
                        css={`
                          min-width: 175px;
                        `}
                      />
                    </div>
                  </div>
                </form>
                <div className="d-flex align-items-center justify-content-between mb-6">
                  <h5 className="font-size-4 font-weight-normal text-gray">
                    Showing
                    <span className="text-black-2">120</span> matched jobs
                  </h5>
                </div>
              </div>
            </div>
            <SearchTab />
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default SearchGrid;
