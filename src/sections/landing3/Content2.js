import React from "react";
import Link from "next/link";

import imgC1 from "../../assets/image/l3/png/content-2-img1.png";
import imgC2 from "../../assets/image/l3/png/content-2-img2.png";
import imgC3 from "../../assets/image/l3/png/content-2-img3.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area -->  */}
      <section className="pb-lg-24 pb-13">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-10 order-2 order-lg-1 "
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="position-relative d-flex flex-column justify-content-center h-100 pr-xl-8 pr-0 mt-5 mt-lg-0">
                {/* <!-- content-2 section title start --> */}
                <h2 className="font-size-8 mb-7 pr-xs-13  pr-md-0 pr-sm-8">
                  Join companies from anywhere in the world.
                </h2>
                <p className="text-default-color font-size-5 mb-7 mb-lg-12 pr-xxl-13 pr-lg-0 pr-md-10">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative things to strategy foster
                  collaborative thinking.
                </p>
                {/* <!-- content-2 section title end --> */}
                {/* <!-- content-2 btn start --> */}
                <Link href="/#">
                  <a className="text-green font-weight-bold text-uppercase font-size-3">
                    Learn More <i className="fas fa-arrow-right ml-3"></i>
                  </a>
                </Link>
                {/* <!-- content-2 btn end --> */}
              </div>
            </div>
            <div
              className="col-lg-6 col-md-8 order-1 order-lg-2 "
              data-aos="fade-left"
              data-aos-duration="800"
            >
              {/* <!-- content-2 start --> */}
              <div className="pl-lg-10 pl-0">
                {/* <!-- content img start --> */}
                <div className="d-xs-flex  mx-sm-n3">
                  <div className="d-flex flex-column px-3 px-sm-6 w-lg-auto w-100">
                    {/* <!-- single image start --> */}
                    <img
                      src={imgC1}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      className="w-100 pb-6 pb-sm-9 rounded-4 "
                    />
                    {/* <!-- single image end --> */}
                    {/* <!-- single image --> */}
                    <img
                      src={imgC2}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="700"
                      className="w-100 pb-6 pb-sm-9 rounded-4 "
                    />
                    {/* <!-- single image end --> */}
                  </div>
                  <div className="d-flex flex-column pt-xs-11 px-3 px-sm-6 w-lg-auto w-100">
                    {/* <!-- single image --> */}
                    <img
                      src={imgC3}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="400"
                      className="w-100 pb-6 pb-sm-9 rounded-4 "
                    />
                    {/* <!-- single image end --> */}
                    {/* <!-- single image --> */}
                    <div className="bg-green py-16 px-19 rounded-4"></div>
                    {/* <!-- single image end --> */}
                  </div>
                </div>
                {/* <!-- abs-content end --> */}
              </div>
              {/* <!-- content-2 end --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
