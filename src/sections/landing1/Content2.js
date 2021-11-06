import React from "react";
import Link from "next/link";

import imgC from "../../assets/image/l1/jpg/content-1-img2.jpg";
import imgM1 from "../../assets/image/l1/png/media-img-1.png";
import imgM2 from "../../assets/image/l1/png/media-img-2.png";
import imgM3 from "../../assets/image/l1/png/media-img-3.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area -->  */}
      <section className="py-13 py-lg-30">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-6 col-lg-5 col-md-10 col-sm-11"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="position-relative pr-lg-20 pr-md-15 pr-9">
                {/* <!-- content img start --> */}
                <img src={imgC} alt="" className="w-100 rounded-4" />
                {/* <!-- content img end --> */}
                {/* <!-- abs-content start --> */}
                <div className="pos-abs-br mb-10 ">
                  <div className="card bg-white shadow-2 border-0">
                    <div className="card-header bg-dodger-2 text-white text-center border-0">
                      Applicants List
                    </div>
                    <div className="card-body mb-n5">
                      {/* <!-- media start --> */}
                      <div className="media mb-5 pr-9">
                        {/* <!-- media img start --> */}
                        <div className="mr-3 mt-2">
                          <img src={imgM1} className="circle-40" alt="" />
                        </div>
                        {/* <!-- media img start --> */}
                        {/* <!-- media body start --> */}
                        <div className="media-body pl-4">
                          <h6 className="mb-0 font-size-4 text-black-2">
                            Davir Mark
                          </h6>
                          <p className="mb-0 font-size-3 text-gray">
                            Product Designer
                          </p>
                        </div>
                        {/* <!-- media body start --> */}
                      </div>
                      {/* <!-- media end --> */}
                      {/* <!-- media start --> */}
                      <div className="media mb-5 pr-9">
                        {/* <!-- media img start --> */}
                        <div className="mr-3 mt-2">
                          <img src={imgM2} className="circle-40" alt="" />
                        </div>
                        {/* <!-- media img start --> */}
                        {/* <!-- media body start --> */}
                        <div className="media-body pl-4">
                          <h6 className="mb-0 font-size-4 text-black-2">
                            Asley Jonshon
                          </h6>
                          <p className="mb-0 font-size-3 text-gray">
                            Web Developer
                          </p>
                        </div>
                        {/* <!-- media body start --> */}
                      </div>
                      {/* <!-- media end --> */}
                      {/* <!-- media start --> */}
                      <div className="media mb-5 pr-9">
                        {/* <!-- media img start --> */}
                        <div className="mr-3 mt-2">
                          <img src={imgM3} className="circle-40" alt="" />
                        </div>
                        {/* <!-- media img start --> */}
                        {/* <!-- media body start --> */}
                        <div className="media-body pl-4">
                          <h6 className="mb-0 font-size-4 text-black-2">
                            Richar Henricks
                          </h6>
                          <p className="mb-0 font-size-3 text-gray">
                            UI Designer
                          </p>
                        </div>
                        {/* <!-- media body start --> */}
                      </div>
                      {/* <!-- media end --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- abs-content end --> */}
              </div>
            </div>
            <div
              className="col-lg-6 col-md-9 col-xs-10"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              {/* <!-- content-2 start --> */}
              <div className="content-2 pl-lg-10 pl-0 d-flex flex-column justify-content-center h-100 pt-lg-0 pt-11 pr-md-13 pr-xl-15 pr-xxl-25 pr-0">
                {/* <!-- content-2 section title start --> */}
                <p className="text-dodger font-size-4 font-weight-semibold mb-8">
                  Looking for an expert for your company?
                </p>
                <h2 className="font-size-9 mb-8">
                  Get applications from the world best talents.
                </h2>
                <p className="text-default-color font-size-5 mb-12">
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps.
                </p>
                {/* <!-- content-2 section title end --> */}
                <Link href="/#">
                  <a className="btn btn-green btn-h-60 text-white w-180 rounded-5 text-uppercase">
                    Post a Job
                  </a>
                </Link>
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
