import React from "react";
import Link from "next/link";

import imgG1 from "../../assets/image/l2/jpg/gallery-img1.jpg";
import imgG2 from "../../assets/image/l2/jpg/gallery-img2.jpg";
import imgG3 from "../../assets/image/l2/jpg/gallery-img3.jpg";
import imgG4 from "../../assets/image/l2/jpg/gallery-img4.jpg";
import imgG5 from "../../assets/image/l2/jpg/gallery-img5.jpg";
import imgG6 from "../../assets/image/l2/jpg/gallery-img6.jpg";
import imgG7 from "../../assets/image/l2/jpg/gallery-img7.jpg";
import imgG8 from "../../assets/image/l2/jpg/gallery-img8.jpg";
import imgG9 from "../../assets/image/l2/jpg/gallery-img9.jpg";
import imgG10 from "../../assets/image/l2/jpg/gallery-img10.jpg";
import imgG11 from "../../assets/image/l2/jpg/gallery-img11.jpg";
import imgG12 from "../../assets/image/l2/jpg/gallery-img12.jpg";
import imgG13 from "../../assets/image/l2/jpg/gallery-img13.jpg";
import imgG14 from "../../assets/image/l2/jpg/gallery-img14.jpg";
import imgG15 from "../../assets/image/l2/jpg/gallery-img15.jpg";
import imgG16 from "../../assets/image/l2/jpg/gallery-img16.jpg";
import imgG17 from "../../assets/image/l2/jpg/gallery-img17.jpg";
import imgG18 from "../../assets/image/l2/jpg/gallery-img18.jpg";
import imgG19 from "../../assets/image/l2/jpg/gallery-img19.jpg";
import imgG20 from "../../assets/image/l2/jpg/gallery-img20.jpg";
import imgG21 from "../../assets/image/l2/jpg/gallery-img21.jpg";
import imgG22 from "../../assets/image/l2/jpg/gallery-img22.jpg";
import imgG23 from "../../assets/image/l2/jpg/gallery-img23.jpg";
import imgG24 from "../../assets/image/l2/jpg/gallery-img24.jpg";
import imgG25 from "../../assets/image/l2/jpg/gallery-img25.jpg";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area -->  */}
      <section className="bg-green position-relative">
        <div className="w-lg-50 ml-lg-auto">
          {/* <!-- gallery start --> */}
          <div
            className="gallery"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            {/* <!-- this content will absolute from right and top --> */}
            <div className="single-item">
              <img src={imgG1} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG2} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG3} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG4} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG5} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG6} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG7} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG8} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG9} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG10} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG11} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG12} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG13} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG14} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG15} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG16} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG17} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG18} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG19} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG20} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG21} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG22} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG23} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG24} alt="" />
            </div>
            <div className="single-item">
              <img src={imgG25} alt="" />
            </div>
          </div>
          {/* <!-- gallery end --> */}
        </div>
        <div className="container pos-lg-abs-c pt-11 pb-13 py-lg-0">
          <div className="row">
            <div
              className="col-xxl-5 col-lg-6 col-md-8 mx-auto mx-lg-0"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              {/* <!-- content-2 start --> */}
              <div className="content-2 pr-lg-5 pr-xl-18 pr-xxl-10 text-center text-lg-left">
                {/* <!-- content-2 section title start --> */}
                <p className="text-white font-size-4 font-weight-semibold mb-8">
                  Looking for an expert for your company?
                </p>
                <h2 className="font-size-9 text-white mb-8">
                  Get applications from the world best talents.
                </h2>
                <p className="text-white font-size-5 mb-12">
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps.
                </p>
                {/* <!-- content-2 section title end --> */}
                {/* <!-- content-2 btn start --> */}
                <Link href="/#">
                  <a className="btn btn-white btn-h-60 text-black-2 w-180 rounded-5 text-uppercase mx-auto mx-lg-0">
                    Post a Job
                  </a>
                </Link>
                {/* <!-- content-2 btn end --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
