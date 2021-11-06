import React from "react";
import { Button } from "react-bootstrap";

import { Select } from "../../components/Core";
import imgC1 from "../../assets/image/l3/png/hero-image-1.png";
import imgC2 from "../../assets/image/l3/png/hero-image-2.png";

const defaultCountries = [
  { value: "sp", label: "Singapore" },
  { value: "bd", label: "Bangladesh" },
  { value: "usa", label: "United States of America" },
  { value: "uae", label: "United Arab Emirates" },
  { value: "pk", label: "Pakistan" },
];

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="position-relative z-index-1  mt-25 mt-md-15 mt-lg-0 mt-xl-22">
        <div className="container">
          <div className="row position-relative align-items-center">
            <div
              className="col-xxl-7 col-xl-8 col-lg-9 pt-lg-26 pb-lg-26 pt-md-20"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-dealy="750"
            >
              <div className="row">
                <div className="col-md-8 col-sm-10">
                  <h1 className="font-size-11 mb-12">
                    Get hired by the popular teams.
                  </h1>
                  <p className="font-size-6">
                    Creating a beautiful job website is not easy always. To make
                    your life easier, we are introducing Justcamp template.
                  </p>
                </div>
              </div>
              <div className="pt-12">
                <form
                  action="/"
                  className="search-form"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-dealy="1200"
                >
                  <div className="filter-search-form-2 bg-white rounded-sm shadow-4 pr-8 py-8 pl-6">
                    <div className="filter-inputs">
                      <div className="form-group position-relative">
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
                      <div className="form-group position-relative">
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
                      <Button className="line-height-reset h-100 btn-submit w-100 text-uppercase">
                        Search
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 pos-abs-tr z-index-n1 position-static position-lg-absolute ml-auto hero-image-positioning-2">
              <div className="image-group row justify-content-center">
                <div className="col-sm-6 col-10 mt-10 mt-lg-0">
                  <div
                    className="single-image"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-dealy="750"
                  >
                    <img src={imgC1} alt="hero 1" />
                  </div>
                </div>
                <div className="col-sm-6 col-10 mt-10 mt-lg-0">
                  <div
                    className="single-image"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-dealy="1200"
                  >
                    <img src={imgC2} alt="hero 2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
