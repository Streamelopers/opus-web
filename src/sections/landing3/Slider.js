import React from "react";
import styled from "styled-components";
import SlickSlider from "react-slick";

import imgT1 from "../../assets/image/l3/png/testimonial.png";
import imgTB from "../../assets/image/l3/png/testimonial-brand-logo.png";

const SliderItem = styled.div`
  &:focus {
    outline: none;
  }
`;

const Slider = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="bg-black-2 pattern-1 bg-image pt-13 pt-lg-31 pb-24 pb-lg-33 overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-12 col-xl-10 col-lg-12 col-md-10 col-xs-11 z-index-2 pt-lg-3 pb-lg-2"
              data-aos="fade-in"
              data-aos-duration="1000"
            >
              <SlickSlider {...settings} className="testimonial-slider-one">
                <SliderItem className="single-slider bg-white rounded-4">
                  <div className="row no-gutters align-items-center justify-content-center">
                    <div className="col-12 col-xl-5 col-lg-5">
                      {/* <!-- Slide Image --> */}
                      <div className="slide-img">
                        <img
                          className="rounded-left w-100"
                          src={imgT1}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-12 col-xl-7 col-lg-7 col-xs-10">
                      {/* <!-- Slide content Start --> */}
                      <div className="slide-content pl-5 pl-lg-10 pl-xxl-20 pr-5 pr-xl-5 py-lg-5 py-9">
                        {/* <!-- Slide Brand Image --> */}
                        <div className="mb-11">
                          <img src={imgTB} alt="" />
                        </div>
                        {/* <!-- Slide Info --> */}
                        <div className="">
                          <p className="font-size-6 text-black-2 pr-5 mb-10">
                            “Being a small but growing brand, we have to
                            definitely do a lot more with less. And when you
                            want to create a business bigger than yourself,
                            you’re going to need help. And that’s what Justcamp
                            does.”
                          </p>
                          {/* <!-- User Info --> */}
                          <div className="">
                            <h4 className="font-size-6 text-black-2 mb-0">
                              Brandon & Rivera
                            </h4>
                            <span className="font-size-4 text-gray">
                              Co-founders of Greener
                            </span>
                          </div>
                        </div>
                        {/* <!-- Slide Info End --> */}
                      </div>
                      {/* <!-- Slide content End --> */}
                    </div>
                  </div>
                </SliderItem>
                <SliderItem className="single-slider bg-white rounded-4">
                  <div className="row no-gutters align-items-center justify-content-center">
                    <div className="col-12 col-xl-5 col-lg-5">
                      {/* <!-- Slide Image --> */}
                      <div className="slide-img">
                        <img
                          className="rounded-left w-100"
                          src={imgT1}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-12 col-xl-7 col-lg-7 col-xs-10">
                      {/* <!-- Slide content Start --> */}
                      <div className="slide-content pl-5 pl-lg-10 pl-xxl-20 pr-5 pr-xl-5 py-lg-5 py-9">
                        {/* <!-- Slide Brand Image --> */}
                        <div className="mb-11">
                          <img src={imgTB} alt="" />
                        </div>
                        {/* <!-- Slide Info --> */}
                        <div className="">
                          <p className="font-size-6 text-black-2 pr-5 mb-10">
                            “Being a small but growing brand, we have to
                            definitely do a lot more with less. And when you
                            want to create a business bigger than yourself,
                            you’re going to need help. And that’s what Justcamp
                            does.”
                          </p>
                          {/* <!-- User Info --> */}
                          <div className="">
                            <h4 className="font-size-6 text-black-2 mb-0">
                              Brandon & Rivera
                            </h4>
                            <span className="font-size-4 text-gray">
                              Co-founders of Greener
                            </span>
                          </div>
                        </div>
                        {/* <!-- Slide Info End --> */}
                      </div>
                      {/* <!-- Slide content End --> */}
                    </div>
                  </div>
                </SliderItem>
                <SliderItem className="single-slider bg-white rounded-4">
                  <div className="row no-gutters align-items-center justify-content-center">
                    <div className="col-12 col-xl-5 col-lg-5">
                      {/* <!-- Slide Image --> */}
                      <div className="slide-img">
                        <img
                          className="rounded-left w-100"
                          src={imgT1}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-12 col-xl-7 col-lg-7 col-xs-10">
                      {/* <!-- Slide content Start --> */}
                      <div className="slide-content pl-5 pl-lg-10 pl-xxl-20 pr-5 pr-xl-5 py-lg-5 py-9">
                        {/* <!-- Slide Brand Image --> */}
                        <div className="mb-11">
                          <img src={imgTB} alt="" />
                        </div>
                        {/* <!-- Slide Info --> */}
                        <div className="">
                          <p className="font-size-6 text-black-2 pr-5 mb-10">
                            “Being a small but growing brand, we have to
                            definitely do a lot more with less. And when you
                            want to create a business bigger than yourself,
                            you’re going to need help. And that’s what Justcamp
                            does.”
                          </p>
                          {/* <!-- User Info --> */}
                          <div className="">
                            <h4 className="font-size-6 text-black-2 mb-0">
                              Brandon & Rivera
                            </h4>
                            <span className="font-size-4 text-gray">
                              Co-founders of Greener
                            </span>
                          </div>
                        </div>
                        {/* <!-- Slide Info End --> */}
                      </div>
                      {/* <!-- Slide content End --> */}
                    </div>
                  </div>
                </SliderItem>
              </SlickSlider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
