import React from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";

import imgF1 from "../assets/image/l2/png/featured-job-logo-1.png";
import iconD from "../assets/image/svg/icon-dolor.svg";
import iconB from "../assets/image/svg/icon-briefcase.svg";
import iconL from "../assets/image/svg/icon-location.svg";

const JobDetails = () => {
  return (
    <>
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
          <div className="container">
            <div className="row justify-content-center">
              {/* <!-- back Button --> */}
              <div className="col-xl-10 col-lg-11 mt-4 ml-xxl-32 ml-xl-15 dark-mode-texts">
                <div className="mb-9">
                  <Link href="/">
                    <a className="d-flex align-items-center ml-4">
                      <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                      <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                        Back to job board
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
              {/* <!-- back Button End --> */}
              <div className="col-xl-9 col-lg-11 mb-8 px-xxl-15 px-xl-0">
                <div className="bg-white rounded-4 border border-mercury shadow-9">
                  {/* <!-- Single Featured Job --> */}
                  <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
                    <div className="row">
                      <div className="col-md-6">
                        {/* <!-- media start --> */}
                        <div className="media align-items-center">
                          {/* <!-- media logo start --> */}
                          <div className="square-72 d-block mr-8">
                            <img src={imgF1} alt="" />
                          </div>
                          {/* <!-- media logo end --> */}
                          {/* <!-- media texts start --> */}
                          <div>
                            <h3 className="font-size-6 mb-0">
                              Product Designer
                            </h3>
                            <span className="font-size-3 text-gray line-height-2">
                              AirBnb
                            </span>
                          </div>
                          {/* <!-- media texts end --> */}
                        </div>
                        {/* <!-- media end --> */}
                      </div>
                      <div className="col-md-6 text-right pt-7 pt-md-0 mt-md-n1">
                        {/* <!-- media date start --> */}
                        <div className="media justify-content-md-end">
                          <p className="font-size-4 text-gray mb-0">
                            19 June 2020
                          </p>
                        </div>
                        {/* <!-- media date end --> */}
                      </div>
                    </div>
                    <div className="row pt-9">
                      <div className="col-12">
                        {/* <!-- card-btn-group start --> */}
                        <div className="card-btn-group">
                          <Link href="/#">
                            <a className="btn btn-green text-uppercase btn-medium rounded-3 w-180 mr-4 mb-5">
                              Apply to this job
                            </a>
                          </Link>
                          <Link href="/#">
                            <a className="btn btn-outline-mercury text-black-2 text-uppercase h-px-48 rounded-3 mb-5 px-5">
                              <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                              Save job
                            </a>
                          </Link>
                        </div>
                        {/* <!-- card-btn-group end --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Single Featured Job --> */}
                  <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts">
                    <div className="row mb-7">
                      <div className="col-md-4 mb-md-0 mb-6">
                        <div className="media justify-content-md-start">
                          <div className="image mr-5">
                            <img src={iconD} alt="" />
                          </div>
                          <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                            80-90K PLN
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 pr-lg-0 pl-lg-10 mb-md-0 mb-6">
                        <div className="media justify-content-md-start">
                          <div className="image mr-5">
                            <img src={iconB} alt="" />
                          </div>
                          <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                            Full-Time
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 pl-lg-0">
                        <div className="media justify-content-md-start">
                          <div className="image mr-5">
                            <img src={iconL} alt="" />
                          </div>
                          <p className="font-size-5 text-gray mb-0">
                            777 Brockton Avenue,{" "}
                            <br className="d-md-none d-lg-block d-block" />
                            Abington MA 2351
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 mb-lg-0 mb-10">
                        <div className="">
                          <span className="font-size-4 d-block mb-4 text-gray">
                            Career Level
                          </span>
                          <h6 className="font-size-5 text-black-2 font-weight-semibold mb-9">
                            Project Manangement
                          </h6>
                        </div>
                        <div className="tags">
                          <p className="font-size-4 text-gray mb-0">
                            Soft Skill
                          </p>
                          <ul className="list-unstyled mr-n3 mb-0">
                            <li className="d-block font-size-4 text-black-2 mt-2">
                              <span className="d-inline-block mr-2">•</span>
                              Slack
                            </li>
                            <li className="d-block font-size-4 text-black-2 mt-2">
                              <span className="d-inline-block mr-2">•</span>
                              Basic English
                            </li>
                            <li className="d-block font-size-4 text-black-2 mt-2">
                              <span className="d-inline-block mr-2">•</span>Well
                              Organized
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-4 pr-lg-0 pl-lg-10 mb-lg-0 mb-8">
                        <div className="">
                          <span className="font-size-4 d-block mb-4 text-gray">
                            Type of corporation
                          </span>
                          <h6 className="font-size-5 text-black-2 font-weight-semibold mb-9">
                            B2B &amp; B2C
                          </h6>
                        </div>
                        <div className="tags">
                          <p className="font-size-4 text-gray mb-3">
                            Technical Skill
                          </p>
                          <ul className="d-flex list-unstyled flex-wrap pr-sm-25 pr-md-0">
                            <li className="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                              Editing
                            </li>
                            <li className="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                              Wire-framing
                            </li>
                            <li className="bg-regent-opacity-15 mr-md-0 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                              XD
                            </li>
                            <li className="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                              User Persona
                            </li>
                            <li className="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                              Sketch
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-4 pl-lg-0">
                        <div className="">
                          <span className="font-size-4 d-block mb-4 text-gray">
                            Company size
                          </span>
                          <h6 className="font-size-5 text-black-2 font-weight-semibold mb-0">
                            11-50 employees
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 light-mode-texts">
                    <div className="row">
                      <div className="col-xl-11 col-md-12 pr-xxl-9 pr-xl-10 pr-lg-20">
                        <div className="">
                          <p className="mb-4 font-size-4 text-gray">
                            Job Description
                          </p>
                          <p className="font-size-4 text-black-2 mb-7">
                            Gubagoo is a fast growing provider of messaging and
                            commerce solutions for automotive dealers changing
                            the future of how people find, buy and service their
                            vehicles.{" "}
                          </p>
                        </div>
                        <div className="">
                          <span className="font-size-4 font-weight-semibold text-black-2 mb-7">
                            Your Role:
                          </span>
                          <p className="font-size-4 text-black-2 mb-7">
                            We’re looking for a passionate individual to design
                            beautiful and functional products for our customers
                            at Gubagoo. We move very fast and you will be
                            expected to contribute to a cross-functional product
                            development squad, that includes product managers
                            and developers, to deliver the UX and UI for the
                            team to bring to life.{" "}
                          </p>
                          <p className="font-size-4 text-black-2 mb-7">
                            We are serious about remote work. You can work for
                            from anywhere.{" "}
                          </p>
                          <span className="font-size-4 font-weight-semibold text-black-2 mb-7">
                            What you will be doing:
                          </span>
                          <ul className="list-unstyled">
                            <li className="d-block font-size-4 text-black-2 d-flex flex-row mt-2">
                              <span className="d-inline-block mr-7">•</span>
                              Contribute new controls or design improvements to
                              our
                            </li>
                            <li className="d-block font-size-4 text-black-2 d-flex flex-row mt-1">
                              <span className="d-inline-block mr-7">•</span>Take
                              ownership of the successful delivery of features
                            </li>
                            <li className="d-block font-size-4 text-black-2 d-flex flex-row mt-1">
                              <span className="d-inline-block mr-7">•</span>Help
                              set and achieve quarterly goals
                            </li>
                            <li className="d-block font-size-4 text-black-2 d-flex flex-row mt-1">
                              <span className="d-inline-block mr-7">•</span>Ship
                              a TON of product improvements and features
                            </li>
                          </ul>
                          <Link href="/#">
                            <a className="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6">
                              Apply to this job
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default JobDetails;
