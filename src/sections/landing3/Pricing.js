import React from "react";
import Link from "next/link";

const Pricing = () => {
  return (
    <>
      {/* <!-- Pricing Area -->  */}
      <div className="pricing-area">
        <div className="container pt-12 pt-lg-24 pb-13 pb-lg-25">
          <div className="row justify-content-center">
            <div
              className="col-xxl-6 col-lg-7 col-md-9 "
              data-aos="fade-in"
              data-aos-duration="1000"
            >
              {/* <!-- section-title start --> */}
              <div className="section-title text-center mb-12 mb-lg-18 mb-lg-15 pb-lg-15 pb-0">
                <h2 className="mb-9">
                  Check our amazing plans, choose the best one for you.
                </h2>
                <p className="text-default-color font-size-4 px-5 px-md-10 px-lg-15 px-xl-24 px-xxl-22">
                  Complete Design Toolkit – huge collection of elements, rich
                  customization options, flexible layouts.
                </p>
              </div>
              {/* <!-- section-title end --> */}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-10 col-xl-11">
              <div className="row justify-content-center">
                <div
                  className="col-lg-4 col-md-6 col-xs-9 "
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  {/* <!-- card start --> */}
                  <div className="card border-mercury rounded-8 mb-lg-3 mb-9 px-xl-12 px-lg-8 px-12 pb-12 hover-shadow-hitgray">
                    {/* <!-- card-header start --> */}
                    <div className="card-header bg-transparent border-hit-gray-opacity-5 text-center pt-11 pb-8">
                      <div className="pricing-title text-center">
                        <h5 className="font-weight-semibold font-size-6 text-black-2">
                          Basic Plan
                        </h5>
                        <h6 className="font-size-4 text-gray font-weight-normal">
                          For single person only
                        </h6>
                      </div>
                      <h2 className="mt-11 text-dodger">
                        $199
                        <span className="font-size-4 text-smoke font-weight-normal">
                          /month
                        </span>{" "}
                      </h2>
                    </div>
                    {/* <!-- card-header end --> */}
                    {/* <!-- card-body start --> */}
                    <div className="card-body px-0 pt-11 pb-15">
                      <ul className="list-unstyled">
                        <li className="mb-6 text-black-2 d-flex font-size-4">
                          <i className="fas fa-check font-size-3 text-black-2 mr-3"></i>{" "}
                          5 Job Postings
                        </li>
                        <li className="mb-6 text-black-2 d-flex font-size-4">
                          <i className="fas fa-check font-size-3 text-black-2 mr-3"></i>{" "}
                          90 Days Duration Each
                        </li>
                        <li className="mb-6 text-black-2 d-flex font-size-4">
                          <i className="fas fa-check font-size-3 text-black-2 mr-3"></i>{" "}
                          Job Alert Emails
                        </li>
                      </ul>
                    </div>
                    {/* <!-- card-body end --> */}
                    {/* <!-- card-footer end --> */}
                    <div className="card-footer bg-transparent border-0 px-0 py-0">
                      <Link href="/#">
                        <a className="btn btn-green btn-h-60 text-white rounded-5 btn-block text-uppercase">
                          Start with Basic
                        </a>
                      </Link>
                    </div>
                    {/* <!-- card-footer end --> */}
                  </div>
                  {/* <!-- card end --> */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-xs-9 "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {/* <!-- card start --> */}
                  <div className="card border-mercury recomended-pricing rounded-8 mb-lg-3 mb-9 px-xl-12 px-lg-8 px-12 pb-12 mt-lg-n13 hover-shadow-hitgray">
                    {/* <!-- card-header start --> */}
                    <div className="card-header bg-transparent border-hit-gray-opacity-5 text-center pt-10 pb-8">
                      <div className="pricing-title text-center">
                        <span className="font-size-3 font-weight-bold text-uppercase text-dodger mb-9 d-inline-block">
                          RECOMMENDED
                        </span>
                        <h5 className="font-weight-semibold font-size-6 text-black-2">
                          Business Plan
                        </h5>
                        <h6 className="font-size-4 text-gray font-weight-normal">
                          For small companies
                        </h6>
                      </div>
                      <h2 className="mt-11 text-dodger">
                        $499
                        <span className="font-size-4 text-smoke font-weight-normal">
                          /month
                        </span>{" "}
                      </h2>
                    </div>
                    {/* <!-- card-header end --> */}
                    {/* <!-- card-body start --> */}
                    <div className="card-body px-0 pt-11 pb-6">
                      <ul className="list-unstyled">
                        <li className="mb-6 text-black-2 d-flex font-size-4">
                          <i className="fas fa-check font-size-3 text-black-2 mr-3"></i>{" "}
                          5 Job Postings
                        </li>
                        <li className="mb-6 text-black-2 d-flex font-size-4">
                          <i className="fas fa-check font-size-3 text-black-2 mr-3"></i>{" "}
                          90 Days Duration Each
                        </li>
                        <li className="mb-6 text-black-2 d-flex font-size-4">
                          <i className="fas fa-check font-size-3 text-black-2 mr-3"></i>{" "}
                          Job Alert Emails
                        </li>
                        <li className="mb-6 text-black-2 d-flex font-size-4">
                          <i className="fas fa-check font-size-3 text-black-2 mr-3"></i>{" "}
                          Candidates Database
                        </li>
                      </ul>
                    </div>
                    {/* <!-- card-body end --> */}
                    {/* <!-- card-footer end --> */}
                    <div className="card-footer bg-transparent border-0 px-0 py-0">
                      <Link href="/#">
                        <a className="btn btn-green btn-h-60 text-white rounded-5 btn-block text-uppercase">
                          Start with Business
                        </a>
                      </Link>
                    </div>
                    {/* <!-- card-footer end --> */}
                  </div>
                  {/* <!-- card end --> */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-xs-9 "
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  {/* <!-- card start --> */}
                  <div className="card border-mercury rounded-8 mb-3 px-xl-12 px-lg-8 px-12 pb-12 hover-shadow-hitgray">
                    {/* <!-- card-header start --> */}
                    <div className="card-header bg-transparent border-hit-gray-opacity-5 text-center pt-11 pb-8">
                      <div className="pricing-title text-center">
                        <h5 className="font-weight-semibold font-size-6 text-black-2">
                          Premium Plan
                        </h5>
                        <h6 className="font-size-4 text-gray font-weight-normal">
                          For bigger companies
                        </h6>
                      </div>
                      <h2 className="mt-11 text-dodger">
                        $999{" "}
                        <span className="font-size-4 text-smoke font-weight-normal">
                          /month
                        </span>{" "}
                      </h2>
                    </div>
                    {/* <!-- card-header end --> */}
                    {/* <!-- card-body start --> */}
                    <div className="card-body px-0 pt-11 pb-6">
                      <ul className="list-unstyled">
                        <li className="mb-6 text-black-2 d-flex font-size-4">
                          <i className="fas fa-check font-size-3 text-black-2 mr-3"></i>{" "}
                          5 Job Postings
                        </li>
                        <li className="mb-6 text-black-2 d-flex font-size-4">
                          <i className="fas fa-check font-size-3 text-black-2 mr-3"></i>{" "}
                          90 Days Duration Each
                        </li>
                        <li className="mb-6 text-black-2 d-flex font-size-4">
                          <i className="fas fa-check font-size-3 text-black-2 mr-3"></i>{" "}
                          Job Alert Emails
                        </li>
                        <li className="mb-6 text-black-2 d-flex font-size-4">
                          <i className="fas fa-check font-size-3 text-black-2 mr-3"></i>{" "}
                          Candidates Database
                        </li>
                      </ul>
                    </div>
                    {/* <!-- card-body end --> */}
                    {/* <!-- card-footer end --> */}
                    <div className="card-footer bg-transparent border-0 px-0 py-0">
                      <Link href="/#">
                        <a className="btn btn-green btn-h-60 text-white rounded-5 btn-block text-uppercase">
                          Start with Premium{" "}
                        </a>
                      </Link>
                    </div>
                    {/* <!-- card-footer end --> */}
                  </div>
                  {/* <!-- card end --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
