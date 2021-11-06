import React from "react";
import Link from "next/link";

const Categories = () => {
  return (
    <>
      {/* <!-- Categories Area -->  */}
      <div
        className="pt-11 pt-lg-26 pb-lg-16"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <div className="container">
          {/* <!-- Section Top --> */}
          <div className="row align-items-center pb-14">
            {/* <!-- Section Title --> */}
            <div className="col-12 col-lg-6">
              <div className="text-center text-lg-left mb-13 mb-lg-0">
                <h2 className="font-size-9 font-weight-bold">
                  Explore by category
                </h2>
              </div>
            </div>
            {/* <!-- Section Button --> */}
            <div className="col-12 col-lg-6">
              <div className="text-center text-lg-right">
                <Link href="/#">
                  <a className="btn btn-outline-green text-uppercase">
                    Explore All
                  </a>
                </Link>
              </div>
            </div>
            {/* <!-- Section Button End --> */}
          </div>
          {/* <!-- End Section Top --> */}
          <div className="row justify-content-center">
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-blue bg-blue-opacity-1 square-70 rounded-4 mb-7 font-size-7">
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
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-spray bg-spray-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                    <i className="fa fa-headset"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Customer Service
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>235</span> Vacancy
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-coral bg-coral-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                    <i className="fa fa-layer-group"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Development
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>624</span> Vacancy
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-red bg-red-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                    <i className="fa fa-pen-nib"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Design
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>174</span> Vacancy
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-orange bg-orange-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                    <i className="fa fa-rocket"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Marketing &amp; Management
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>268</span> Vacancy
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-yellow bg-yellow-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                    <i className="fa fa-location-arrow"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Sales &amp; Communication
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>156</span> Vacancy
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-turquoise bg-turquoise-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                    <i className="icon icon-sidebar-2"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Project Management
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>162</span> Vacancy
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-green bg-green-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                    <i className="fa fa-user"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Human Resource{" "}
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>84</span> Vacancy
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
