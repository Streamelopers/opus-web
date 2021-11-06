import React from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import Sidebar from "../components/Sidebar";
import { Select } from "../components/Core";

import imgB1 from "../assets/image/l1/png/feature-brand-1.png";
import imgB2 from "../assets/image/l1/png/feature-brand-2.png";
import imgB3 from "../assets/image/l1/png/feature-brand-3.png";
import imgB4 from "../assets/image/l1/png/feature-brand-4.png";
import imgB5 from "../assets/image/l1/png/feature-brand-5.png";
import imgB6 from "../assets/image/l1/png/feature-brand-6.png";

const defaultCountries = [
  { value: "sp", label: "Singapore" },
  { value: "bd", label: "Bangladesh" },
  { value: "usa", label: "United States of America" },
  { value: "uae", label: "United Arab Emirates" },
  { value: "pk", label: "Pakistan" },
];

const SearchGrid = () => {
  return (
    <>
      <PageWrapper>
        <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 col-xs-8">
                <Sidebar />
              </div>
              <div className="col-12 col-md-8 col-xs-12 ">
                {/* <!-- form --> */}
                <form
                  action="/"
                  className="search-form search-2-adjustment ml-lg-0 ml-md-15"
                >
                  <div className="filter-search-form-2 bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
                    <div className="filter-inputs">
                      <div className="form-group position-relative w-lg-45 w-xl-40 w-xxl-45">
                        <input
                          className="form-control focus-reset pl-13"
                          type="text"
                          id="keyword"
                          placeholder="UI Designer"
                        />
                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                        </span>
                      </div>
                      {/* <!-- .select-city starts --> */}
                      <div className="form-group position-relative w-lg-55 w-xl-60 w-xxl-55">
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
                      <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
                <div className="pt-12 ml-lg-0 ml-md-15">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="font-size-4 font-weight-normal text-default-color">
                      <span className="heading-default-color">120</span>
                      results for{" "}
                      <span className="heading-default-color">UI Designer</span>
                    </h5>
                    <div className="d-flex align-items-center result-view-type">
                      <Link href="/search-list">
                        <a className="heading-default-color pl-5 font-size-6 hover-text-hitgray">
                          <i className="fa fa-list-ul"></i>
                        </a>
                      </Link>
                      <Link href="/search-grid">
                        <a className="heading-default-color pl-5 font-size-6 hover-text-hitgray active">
                          <i className="fa fa-th-large"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="row justify-content-center">
                      <div className="col-12 col-lg-6">
                        {/* <!-- Start Feature One --> */}
                        <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                          <div className="d-block mb-7">
                            <Link href="/#">
                              <a>
                                <img src={imgB1} alt="" />
                              </a>
                            </Link>
                          </div>
                          <Link href="/#">
                            <a className="font-size-3 d-block mb-0 text-gray">
                              Google INC
                            </a>
                          </Link>
                          <h2 className="mt-n4">
                            <Link href="/#">
                              <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                                Product Designer
                              </a>
                            </Link>
                          </h2>
                          <ul className="list-unstyled mb-1 card-tag-list">
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                                  <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                                  Berlyn
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                                  <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                                  Full-time
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                                  <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                                  80K-90K
                                </a>
                              </Link>
                            </li>
                          </ul>
                          <p className="mb-7 font-size-4 text-gray">
                            We are looking for Enrollment Advisors who are
                            looking to take 30-35 appointments per week. All
                            leads are pre-scheduled.
                          </p>
                          <div className="card-btn-group">
                            <Link href="/#">
                              <a className="btn btn-green text-uppercase btn-medium rounded-3">
                                Apply Now
                              </a>
                            </Link>
                            <Link href="/#">
                              <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                                <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                                Save it
                              </a>
                            </Link>
                          </div>
                        </div>
                        {/* <!-- End Feature One --> */}
                      </div>
                      <div className="col-12 col-lg-6">
                        {/* <!-- Start Feature One --> */}
                        <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                          <div className="d-block mb-7">
                            <Link href="/#">
                              <a>
                                <img src={imgB2} alt="" />
                              </a>
                            </Link>
                          </div>
                          <Link href="/#">
                            <a className="font-size-3 d-block mb-0 text-gray">
                              AirBnb
                            </a>
                          </Link>
                          <h2 className="mt-n4">
                            <Link href="/#">
                              <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                                UI/UX Designer
                              </a>
                            </Link>
                          </h2>
                          <ul className="list-unstyled mb-1 card-tag-list">
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                                  <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                                  Berlyn
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                                  <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                                  Full-time
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                                  <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                                  80K-90K
                                </a>
                              </Link>
                            </li>
                          </ul>
                          <p className="mb-7 font-size-4 text-gray">
                            We are looking for Enrollment Advisors who are
                            looking to take 30-35 appointments per week. All
                            leads are pre-scheduled.
                          </p>
                          <div className="card-btn-group">
                            <Link href="/#">
                              <a className="btn btn-green text-uppercase btn-medium rounded-3">
                                Apply Now
                              </a>
                            </Link>
                            <Link href="/#">
                              <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                                <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                                Save it
                              </a>
                            </Link>
                          </div>
                        </div>
                        {/* <!-- End Feature One --> */}
                      </div>
                      <div className="col-12 col-lg-6">
                        {/* <!-- Start Feature One --> */}
                        <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                          <div className="d-block mb-7">
                            <Link href="/#">
                              <a>
                                <img src={imgB3} alt="" />
                              </a>
                            </Link>
                          </div>
                          <Link href="/#">
                            <a className="font-size-3 d-block mb-0 text-gray">
                              Shopify
                            </a>
                          </Link>
                          <h2 className="mt-n4">
                            <Link href="/#">
                              <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                                iOS Developer
                              </a>
                            </Link>
                          </h2>
                          <ul className="list-unstyled mb-1 card-tag-list">
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                                  <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                                  Berlyn
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                                  <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                                  Full-time
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                                  <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                                  80K-90K
                                </a>
                              </Link>
                            </li>
                          </ul>
                          <p className="mb-7 font-size-4 text-gray">
                            We are looking for Enrollment Advisors who are
                            looking to take 30-35 appointments per week. All
                            leads are pre-scheduled.
                          </p>
                          <div className="card-btn-group">
                            <Link href="/#">
                              <a className="btn btn-green text-uppercase btn-medium rounded-3">
                                Apply Now
                              </a>
                            </Link>
                            <Link href="/#">
                              <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                                <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                                Save it
                              </a>
                            </Link>
                          </div>
                        </div>
                        {/* <!-- End Feature One --> */}
                      </div>
                      <div className="col-12 col-lg-6">
                        {/* <!-- Start Feature One --> */}
                        <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                          <div className="d-block mb-7">
                            <Link href="/#">
                              <a>
                                <img src={imgB4} alt="" />
                              </a>
                            </Link>
                          </div>
                          <Link href="/#">
                            <a className="font-size-3 d-block mb-0 text-gray">
                              Uber
                            </a>
                          </Link>
                          <h2 className="mt-n4">
                            <Link href="/#">
                              <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                                Creative Director{" "}
                              </a>
                            </Link>
                          </h2>
                          <ul className="list-unstyled mb-1 card-tag-list">
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                                  <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                                  Berlyn
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                                  <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                                  Full-time
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                                  <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                                  80K-90K
                                </a>
                              </Link>
                            </li>
                          </ul>
                          <p className="mb-7 font-size-4 text-gray">
                            We are looking for Enrollment Advisors who are
                            looking to take 30-35 appointments per week. All
                            leads are pre-scheduled.
                          </p>
                          <div className="card-btn-group">
                            <Link href="/#">
                              <a className="btn btn-green text-uppercase btn-medium rounded-3">
                                Apply Now
                              </a>
                            </Link>
                            <Link href="/#">
                              <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                                <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                                Save it
                              </a>
                            </Link>
                          </div>
                        </div>
                        {/* <!-- End Feature One --> */}
                      </div>
                      <div className="col-12 col-lg-6">
                        {/* <!-- Start Feature One --> */}
                        <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                          <div className="d-block mb-7">
                            <Link href="/#">
                              <a>
                                <img src={imgB5} alt="" />
                              </a>
                            </Link>
                          </div>
                          <Link href="/#">
                            <a className="font-size-3 d-block mb-0 text-gray">
                              Facebook
                            </a>
                          </Link>
                          <h2 className="mt-n4">
                            <Link href="/#">
                              <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                                Marketing Manager{" "}
                              </a>
                            </Link>
                          </h2>
                          <ul className="list-unstyled mb-1 card-tag-list">
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                                  <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                                  Berlyn
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                                  <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                                  Full-time
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                                  <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                                  80K-90K
                                </a>
                              </Link>
                            </li>
                          </ul>
                          <p className="mb-7 font-size-4 text-gray">
                            We are looking for Enrollment Advisors who are
                            looking to take 30-35 appointments per week. All
                            leads are pre-scheduled.
                          </p>
                          <div className="card-btn-group">
                            <Link href="/#">
                              <a className="btn btn-green text-uppercase btn-medium rounded-3">
                                Apply Now
                              </a>
                            </Link>
                            <Link href="/#">
                              <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                                <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                                Save it
                              </a>
                            </Link>
                          </div>
                        </div>
                        {/* <!-- End Feature One --> */}
                      </div>
                      <div className="col-12 col-lg-6">
                        {/* <!-- Start Feature One --> */}
                        <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                          <div className="d-block mb-7">
                            <Link href="/#">
                              <a>
                                <img src={imgB6} alt="" />
                              </a>
                            </Link>
                          </div>
                          <Link href="/#">
                            <a className="font-size-3 d-block mb-0 text-gray">
                              Oculus
                            </a>
                          </Link>
                          <h2 className="mt-n4">
                            <Link href="/#">
                              <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                                Software Engineer
                              </a>
                            </Link>
                          </h2>
                          <ul className="list-unstyled mb-1 card-tag-list">
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                                  <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                                  Berlyn
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                                  <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                                  Full-time
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                                  <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                                  80K-90K
                                </a>
                              </Link>
                            </li>
                          </ul>
                          <p className="mb-7 font-size-4 text-gray">
                            We are looking for Enrollment Advisors who are
                            looking to take 30-35 appointments per week. All
                            leads are pre-scheduled.
                          </p>
                          <div className="card-btn-group">
                            <Link href="/#">
                              <a className="btn btn-green text-uppercase btn-medium rounded-3">
                                Apply Now
                              </a>
                            </Link>
                            <Link href="/#">
                              <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                                <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                                Save it
                              </a>
                            </Link>
                          </div>
                        </div>
                        {/* <!-- End Feature One --> */}
                      </div>
                    </div>
                  </div>
                  <div className="text-center pt-5 pt-lg-13">
                    <Link href="/#">
                      <a className="text-green font-weight-bold text-uppercase font-size-3 d-flex align-items-center justify-content-center">
                        Load More{" "}
                        <i className="fas fa-sort-down ml-3 mt-n2 font-size-4"></i>
                      </a>
                    </Link>
                  </div>
                </div>
                {/* <!-- form end --> */}
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default SearchGrid;
