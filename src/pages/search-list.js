import React from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import Sidebar from "../components/Sidebar";
import { Select } from "../components/Core";

import imgF1 from "../assets/image/l2/png/featured-job-logo-1.png";
import imgF2 from "../assets/image/l2/png/featured-job-logo-2.png";
import imgF3 from "../assets/image/l2/png/featured-job-logo-3.png";
import imgF4 from "../assets/image/l2/png/featured-job-logo-4.png";
import imgF5 from "../assets/image/l2/png/featured-job-logo-5.png";

import imgF from "../assets/image/svg/icon-fire-rounded.svg";
import iconL from "../assets/image/svg/icon-loaction-pin-black.svg";
import iconS from "../assets/image/svg/icon-suitecase.svg";
import iconC from "../assets/image/svg/icon-clock.svg";

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
              <div className="col-12 col-lg-4 col-md-5 col-xs-8">
                <Sidebar />
              </div>
              {/* <!-- Main Body --> */}
              <div className="col-12 col-xl-8 col-lg-8">
                {/* <!-- form --> */}
                <form action="/" className="search-form">
                  <div className="filter-search-form-2 search-1-adjustment bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
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
                <div className="pt-12">
                  <div className="d-flex align-items-center justify-content-between mb-6">
                    <h5 className="font-size-4 font-weight-normal text-gray">
                      <span className="heading-default-color">120</span>
                      results for{" "}
                      <span className="heading-default-color">UI Designer</span>
                    </h5>
                    <div className="d-flex align-items-center result-view-type">
                      <Link href="/search-list">
                        <a className="heading-default-color pl-5 font-size-6 hover-text-hitgray active">
                          <i className="fa fa-list-ul"></i>
                        </a>
                      </Link>
                      <Link href="/search-grid">
                        <a className="heading-default-color pl-5 font-size-6 hover-text-hitgray">
                          <i className="fa fa-th-large"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="mb-8">
                    {/* <!-- Single Featured Job --> */}
                    <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="media align-items-center">
                            <div className="square-72 d-block mr-8">
                              <img src={imgF1} alt="" />
                            </div>
                            <div>
                              <h3 className="mb-0">
                                <Link href="/#">
                                  <a className="font-size-6 heading-default-color">
                                    Product Designer
                                  </a>
                                </Link>
                              </h3>
                              <Link href="/#">
                                <a className="font-size-3 text-default-color line-height-2">
                                  AirBnb
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 text-right pt-7 pt-md-5">
                          <div className="media justify-content-md-end">
                            <div className="image mr-5 mt-2">
                              <img src={imgF} alt="" />
                            </div>
                            <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                              <span className="text-black-2">80-90K</span> PLN
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-8">
                        <div className="col-md-7">
                          <ul className="d-flex list-unstyled mr-n3 flex-wrap">
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  Agile
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  Wireframing
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  Prototyping
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-5">
                          <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                              <span
                                className="mr-4"
                                css={`
                                  margin-top: -2px;
                                `}
                              >
                                <img src={iconL} alt="" />
                              </span>
                              <span className="font-weight-semibold">
                                Berlyn, UK
                              </span>
                            </li>
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                              <span
                                className="mr-4"
                                css={`
                                  margin-top: -2px;
                                `}
                              >
                                <img src={iconS} alt="" />
                              </span>
                              <span className="font-weight-semibold">
                                Full-time
                              </span>
                            </li>
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                              <span
                                className="mr-4"
                                css={`
                                  margin-top: -2px;
                                `}
                              >
                                <img src={iconC} alt="" />
                              </span>
                              <span className="font-weight-semibold">
                                9d ago
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Single Featured Job --> */}
                  </div>
                  <div className="mb-8">
                    {/* <!-- Single Featured Job --> */}
                    <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="media align-items-center">
                            <div className="square-72 d-block mr-8">
                              <img src={imgF2} alt="" />
                            </div>
                            <div>
                              <h3 className="mb-0">
                                <Link href="/#">
                                  <a className="font-size-6 heading-default-color">
                                    UI/UX Designer
                                  </a>
                                </Link>
                              </h3>
                              <Link href="/#">
                                <a className="font-size-3 text-default-color line-height-2">
                                  Apple INC
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 text-right pt-7 pt-md-5">
                          <div className="media justify-content-md-end">
                            <div className="image mr-5 mt-2">
                              <img src={imgF} alt="" />
                            </div>
                            <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                              <span className="text-black-2">120-150K</span> PLN
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-8">
                        <div className="col-md-7">
                          <ul className="d-flex list-unstyled mr-n3 flex-wrap">
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  Visual Design
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  Wireframing
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  Scrum
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-5">
                          <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                              <span
                                className="mr-4"
                                css={`
                                  margin-top: -2px;
                                `}
                              >
                                <img src={iconL} alt="" />
                              </span>
                              <span className="font-weight-semibold">
                                Berlyn, UK
                              </span>
                            </li>
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                              <span
                                className="mr-4"
                                css={`
                                  margin-top: -2px;
                                `}
                              >
                                <img src={iconS} alt="" />
                              </span>
                              <span className="font-weight-semibold">
                                Full-time
                              </span>
                            </li>
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                              <span
                                className="mr-4"
                                css={`
                                  margin-top: -2px;
                                `}
                              >
                                <img src={iconC} alt="" />
                              </span>
                              <span className="font-weight-semibold">
                                9d ago
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Single Featured Job --> */}
                  </div>
                  <div className="mb-8">
                    {/* <!-- Single Featured Job --> */}
                    <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="media align-items-center">
                            <div className="square-72 d-block mr-8">
                              <img src={imgF3} alt="" />
                            </div>
                            <div>
                              <h3 className="mb-0">
                                <Link href="/#">
                                  <a className="font-size-6 heading-default-color">
                                    iOS Developer
                                  </a>
                                </Link>
                              </h3>
                              <Link href="/#">
                                <a className="font-size-3 text-default-color line-height-2">
                                  Shopify
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 text-right pt-7 pt-md-5">
                          <div className="media justify-content-md-end">
                            <div className="image mr-5 mt-2">
                              <img src={imgF} alt="" />
                            </div>
                            <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                              <span className="text-black-2">100-120K</span> PLN
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-8">
                        <div className="col-md-7">
                          <ul className="d-flex list-unstyled mr-n3 flex-wrap">
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  Swift
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  Objective C
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  X Code
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-5">
                          <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                              <span
                                className="mr-4"
                                css={`
                                  margin-top: -2px;
                                `}
                              >
                                <img src={iconL} alt="" />
                              </span>
                              <span className="font-weight-semibold">
                                Berlyn, UK
                              </span>
                            </li>
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                              <span
                                className="mr-4"
                                css={`
                                  margin-top: -2px;
                                `}
                              >
                                <img src={iconS} alt="" />
                              </span>
                              <span className="font-weight-semibold">
                                Full-time
                              </span>
                            </li>
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                              <span
                                className="mr-4"
                                css={`
                                  margin-top: -2px;
                                `}
                              >
                                <img src={iconC} alt="" />
                              </span>
                              <span className="font-weight-semibold">
                                9d ago
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Single Featured Job --> */}
                  </div>
                  <div className="mb-8">
                    {/* <!-- Single Featured Job --> */}
                    <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="media align-items-center">
                            <div className="square-72 d-block mr-8">
                              <img src={imgF4} alt="" />
                            </div>
                            <div>
                              <h3 className="mb-0">
                                <Link href="/#">
                                  <a className="font-size-6 heading-default-color">
                                    Creative Director
                                  </a>
                                </Link>
                              </h3>
                              <Link href="/#">
                                <a className="font-size-3 text-default-color line-height-2">
                                  Facebook
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 text-right pt-7 pt-md-5">
                          <div className="media justify-content-md-end">
                            <div className="image mr-5 mt-2">
                              <img src={imgF} alt="" />
                            </div>
                            <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                              <span className="text-black-2">80-90K</span> PLN
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-8">
                        <div className="col-md-7">
                          <ul className="d-flex list-unstyled mr-n3 flex-wrap">
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  Agile
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  Wireframing
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  Prototyping
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-5">
                          <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                              <span
                                className="mr-4"
                                css={`
                                  margin-top: -2px;
                                `}
                              >
                                <img src={iconL} alt="" />
                              </span>
                              <span className="font-weight-semibold">
                                Berlyn, UK
                              </span>
                            </li>
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                              <span
                                className="mr-4"
                                css={`
                                  margin-top: -2px;
                                `}
                              >
                                <img src={iconS} alt="" />
                              </span>
                              <span className="font-weight-semibold">
                                Full-time
                              </span>
                            </li>
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                              <span
                                className="mr-4"
                                css={`
                                  margin-top: -2px;
                                `}
                              >
                                <img src={iconC} alt="" />
                              </span>
                              <span className="font-weight-semibold">
                                9d ago
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Single Featured Job --> */}
                  </div>
                  <div className="mb-8">
                    {/* <!-- Single Featured Job --> */}
                    <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="media align-items-center">
                            <div className="square-72 d-block mr-8">
                              <img src={imgF5} alt="" />
                            </div>
                            <div>
                              <h3 className="mb-0">
                                <Link href="/#">
                                  <a className="font-size-6 heading-default-color">
                                    Software Engineer
                                  </a>
                                </Link>
                              </h3>
                              <Link href="/#">
                                <a className="font-size-3 text-default-color line-height-2">
                                  Oculus
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 text-right pt-7 pt-md-5">
                          <div className="media justify-content-md-end">
                            <div className="image mr-5 mt-2">
                              <img src={imgF} alt="" />
                            </div>
                            <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                              <span className="text-black-2">80-90K</span> PLN
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-8">
                        <div className="col-md-7">
                          <ul className="d-flex list-unstyled mr-n3 flex-wrap">
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  C++
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  JavaScprit
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  ReactJS
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-5">
                          <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                              <span
                                className="mr-4"
                                css={`
                                  margin-top: -2px;
                                `}
                              >
                                <img src={iconL} alt="" />
                              </span>
                              <span className="font-weight-semibold">
                                Berlyn, UK
                              </span>
                            </li>
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                              <span
                                className="mr-4"
                                css={`
                                  margin-top: -2px;
                                `}
                              >
                                <img src={iconS} alt="" />
                              </span>
                              <span className="font-weight-semibold">
                                Full-time
                              </span>
                            </li>
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                              <span
                                className="mr-4"
                                css={`
                                  margin-top: -2px;
                                `}
                              >
                                <img src={iconC} alt="" />
                              </span>
                              <span className="font-weight-semibold">
                                9d ago
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Single Featured Job --> */}
                  </div>
                  <div className="mb-8">
                    {/* <!-- Single Featured Job --> */}
                    <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="media align-items-center">
                            <div className="square-72 d-block mr-8">
                              <img src={imgF1} alt="" />
                            </div>
                            <div>
                              <h3 className="mb-0">
                                <Link href="/#">
                                  <a className="font-size-6 heading-default-color">
                                    Product Designer
                                  </a>
                                </Link>
                              </h3>
                              <Link href="/#">
                                <a className="font-size-3 text-default-color line-height-2">
                                  AirBnb
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 text-right pt-7 pt-md-5">
                          <div className="media justify-content-md-end">
                            <div className="image mr-5 mt-2">
                              <img src={imgF} alt="" />
                            </div>
                            <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                              <span className="text-black-2">80-90K</span> PLN
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-8">
                        <div className="col-md-7">
                          <ul className="d-flex list-unstyled mr-n3 flex-wrap">
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  Agile
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  Wireframing
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  Prototyping
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-5">
                          <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                              <span
                                className="mr-4"
                                css={`
                                  margin-top: -2px;
                                `}
                              >
                                <img src={iconL} alt="" />
                              </span>
                              <span className="font-weight-semibold">
                                Berlyn, UK
                              </span>
                            </li>
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                              <span
                                className="mr-4"
                                css={`
                                  margin-top: -2px;
                                `}
                              >
                                <img src={iconS} alt="" />
                              </span>
                              <span className="font-weight-semibold">
                                Full-time
                              </span>
                            </li>
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                              <span
                                className="mr-4"
                                css={`
                                  margin-top: -2px;
                                `}
                              >
                                <img src={iconC} alt="" />
                              </span>
                              <span className="font-weight-semibold">
                                9d ago
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Single Featured Job --> */}
                  </div>
                  <div className="text-center pt-5 pt-lg-13">
                    <Link href="/#">
                      <a className="text-green font-weight-bold text-uppercase font-size-3">
                        Load More <i className="fas fa-sort-down ml-3"></i>
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
