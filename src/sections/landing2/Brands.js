import React from "react";

import imgB1 from "../../assets/image/l1/png/brand-light-logo-1.png";
import imgB2 from "../../assets/image/l1/png/brand-light-logo-2.png";
import imgB3 from "../../assets/image/l1/png/brand-light-logo-3.png";
import imgB4 from "../../assets/image/l1/png/brand-light-logo-4.png";
import imgB5 from "../../assets/image/l1/png/brand-light-logo-5.png";
import imgB6 from "../../assets/image/l1/png/brand-light-logo-6.png";

const Brands = () => {
  return (
    <>
      {/* <!-- Brands Area --> */}
      <div className="pt-29 pt-lg-30 pb-10 pb-lg-22">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title mb-9 text-center">
                <h5 className="font-size-5 font-weight-normal text-gray">
                  Get hired in top companies
                </h5>
              </div>
            </div>
          </div>
          {/* <!-- Brand Logos --> */}
          <div className="row align-items-center justify-content-center justify-content-lg-between gr-opacity-5">
            {/* <!-- Single Brand --> */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
            >
              <img src={imgB1} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <img src={imgB2} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <img src={imgB3} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="700"
            >
              <img src={imgB4} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="900"
            >
              <img src={imgB5} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="1200"
            >
              <img src={imgB6} alt="" />
            </div>
          </div>
          {/* <!-- End Brand Logos --> */}
        </div>
      </div>
    </>
  );
};

export default Brands;
