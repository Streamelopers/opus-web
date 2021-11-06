import React from "react";
import Link from "next/link";

const Categories = () => {
  return (
    <>
      {/* <!-- Categories Area -->  */}
      <div className="pb-13 pb-lg-25 bg-gradient-2">
        <div className="container">
          <hr className="pt-13 pt-lg-20" />
          {/* <!-- Section Top --> */}
          <div className="row align-items-center justify-content-center">
            {/* <!-- Section Title --> */}
            <div className="col-12 col-xl-6 col-lg-7 col-md-9">
              <div className="text-center mb-12 mb-lg-17">
                <h2 className="font-size-10 font-weight-bold mb-8">
                  Explore by category
                </h2>
                <p className="font-size-5 px-5 px-lg-7 px-xl-9 px-xxl-15 mb-6">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews to start.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- End Section Top --> */}
          <div
            className="row justify-content-center"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                  <div className="text-white bg-blue square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                    <i className="fa fa-briefcase"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Business Development
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>415</span> Vacancy
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                  <div className="text-white bg-spray square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                    <i className="fa fa-headset"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Customer Service
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>415</span> Vacancy
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                  <div className="text-white bg-coral square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                    <i className="fa fa-layer-group"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Development
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>415</span> Vacancy
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                  <div className="text-white bg-red square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                    <i className="fa fa-pen-nib"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Design
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>415</span> Vacancy
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                  <div className="text-white bg-orange square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                    <i className="fa fa-rocket"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Marketing &amp; Management
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>415</span> Vacancy
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                  <div className="text-white bg-yellow square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                    <i className="fa fa-location-arrow"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Sales &amp; Communication
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>415</span> Vacancy
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                  <div className="text-white bg-turquoise square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                    <i className="icon icon-sidebar-2"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Project Management
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>415</span> Vacancy
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                  <div className="text-white bg-green square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                    <i className="fa fa-user"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Human Resource{" "}
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>415</span> Vacancy
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="text-center pt-5 pt-lg-13">
                <Link href="/#">
                  <a className="btn btn-outline-black-2 btn-lg text-uppercase">
                    Explore All
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
