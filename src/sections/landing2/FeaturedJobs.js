import React from "react";
import Link from "next/link";
import imgF1 from "../../assets/image/l2/png/featured-job-logo-1.png";
import imgF2 from "../../assets/image/l2/png/featured-job-logo-2.png";
import imgF3 from "../../assets/image/l2/png/featured-job-logo-3.png";
import imgF4 from "../../assets/image/l2/png/featured-job-logo-4.png";
import imgF5 from "../../assets/image/l2/png/featured-job-logo-5.png";

import iconFR from "../../assets/image/svg/icon-fire-rounded.svg";
import iconLPB from "../../assets/image/svg/icon-loaction-pin-black.svg";
import iconS from "../../assets/image/svg/icon-suitecase.svg";
import iconC from "../../assets/image/svg/icon-clock.svg";

const FeaturedJobs = () => {
  return (
    <>
      {/* <!-- FeaturedJobs Area -->  */}
      <section className="bg-athens pt-12 pt-lg-24 pb-7 pb-lg-25">
        <div className="container">
          {/* <!-- Section Title --> */}
          <div className="row justify-content-center mb-lg-16 mb-11">
            <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-10 text-center">
              <h2 className="mb-6 mb-lg-7 text-black-2 font-size-10">
                Featured Jobs
              </h2>
              <p className="px-xs-3 px-md-12 px-lg-8 px-xl-8 px-xxl-6 font-size-5 mb-0">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews to start.
              </p>
            </div>
          </div>
          {/* <!-- Section Title End --> */}
          <div className="row justify-content-center">
            <div
              className="col-xxl-9 col-xl-9 col-lg-10 mb-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
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
                        <img src={iconFR} alt="" />
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
                          <img src={iconLPB} alt="" />
                        </span>
                        <span className="font-weight-semibold">Berlyn, UK</span>
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
                        <span className="font-weight-semibold">Full-time</span>
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
                        <span className="font-weight-semibold">9d ago</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- End Single Featured Job --> */}
            </div>
            <div
              className="col-xxl-9 col-xl-9 col-lg-10 mb-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
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
                        <img src={iconFR} alt="" />
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
                          <img src={iconLPB} alt="" />
                        </span>
                        <span className="font-weight-semibold">Berlyn, UK</span>
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
                        <span className="font-weight-semibold">Full-time</span>
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
                        <span className="font-weight-semibold">9d ago</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- End Single Featured Job --> */}
            </div>
            <div
              className="col-xxl-9 col-xl-9 col-lg-10 mb-8 aos-init"
              data-aos="fade-right"
              data-aos-duration="800"
            >
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
                        <img src={iconFR} alt="" />
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
                          <img src={iconLPB} alt="" />
                        </span>
                        <span className="font-weight-semibold">Berlyn, UK</span>
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
                        <span className="font-weight-semibold">Full-time</span>
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
                        <span className="font-weight-semibold">9d ago</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- End Single Featured Job --> */}
            </div>
            <div
              className="col-xxl-9 col-xl-9 col-lg-10 mb-8 aos-init"
              data-aos="fade-right"
              data-aos-duration="800"
            >
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
                        <img src={iconFR} alt="" />
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
                          <img src={iconLPB} alt="" />
                        </span>
                        <span className="font-weight-semibold">Berlyn, UK</span>
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
                        <span className="font-weight-semibold">Full-time</span>
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
                        <span className="font-weight-semibold">9d ago</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- End Single Featured Job --> */}
            </div>
            <div
              className="col-xxl-9 col-xl-9 col-lg-10 mb-8 aos-init"
              data-aos="fade-right"
              data-aos-duration="800"
            >
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
                        <img src={iconFR} alt="" />
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
                          <img src={iconLPB} alt="" />
                        </span>
                        <span className="font-weight-semibold">Berlyn, UK</span>
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
                        <span className="font-weight-semibold">Full-time</span>
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
                        <span className="font-weight-semibold">9d ago</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- End Single Featured Job --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedJobs;
