import React from "react";
import Link from "next/link";

import imgP from "../../assets/image/l3/png/pro-img.png";

const Sidebar = (props) => {
  return (
    <>
      {/* <!-- Sidebar Start --> */}

      <div {...props}>
        <div className="pl-lg-5">
          {/* <!-- Top Start --> */}
          <div className="bg-white shadow-9 rounded-4">
            <div className="px-5 py-11 text-center border-bottom border-mercury">
              <Link href="/#">
                <a className="mb-4">
                  <img className="circle-54" src={imgP} alt="" />
                </a>
              </Link>
              <h4 className="mb-0">
                <Link href="/#">
                  <a className="text-black-2 font-size-6 font-weight-semibold">
                    David Henricks
                  </a>
                </Link>
              </h4>
              <p className="mb-8">
                <Link href="/#">
                  <a className="text-gray font-size-4">Product Designer</a>
                </Link>
              </p>
              <div className="icon-link d-flex align-items-center justify-content-center flex-wrap">
                <Link href="/#">
                  <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </Link>
                <Link href="/#">
                  <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
                <Link href="/#">
                  <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green">
                    <i className="fab fa-twitter"></i>
                  </a>
                </Link>
                <Link href="/#">
                  <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </Link>
                <Link href="/#">
                  <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green">
                    <i className="fab fa-behance"></i>
                  </a>
                </Link>
              </div>
            </div>
            {/* <!-- Top End --> */}
            {/* <!-- Bottom Start --> */}
            <div className="px-9 pt-lg-5 pt-9 pt-xl-9 pb-5">
              <h5 className="text-black-2 mb-8 font-size-5">Contact Info</h5>
              {/* <!-- Single List --> */}
              <div className="mb-7">
                <p className="font-size-4 mb-0">Location</p>
                <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                  New York , USA
                </h5>
              </div>
              {/* <!-- Single List --> */}
              {/* <!-- Single List --> */}
              <div className="mb-7">
                <p className="font-size-4 mb-0">E-mail</p>
                <h5 className="font-size-4 font-weight-semibold mb-0">
                  <a
                    className="text-black-2 text-break"
                    href="mailto:name_ac@gmail.com"
                  >
                    name_ac@gmail.com
                  </a>
                </h5>
              </div>
              {/* <!-- Single List --> */}
              {/* <!-- Single List --> */}
              <div className="mb-7">
                <p className="font-size-4 mb-0">Phone</p>
                <h5 className="font-size-4 font-weight-semibold mb-0">
                  <a className="text-black-2 text-break" href="tel:+999565562">
                    +999 565 562
                  </a>
                </h5>
              </div>
              {/* <!-- Single List --> */}
              {/* <!-- Single List --> */}
              <div className="mb-7">
                <p className="font-size-4 mb-0">Website Linked</p>
                <h5 className="font-size-4 font-weight-semibold mb-0">
                  <Link href="/#">
                    <a className="text-break">www.nameac.com</a>
                  </Link>
                </h5>
              </div>
              {/* <!-- Single List --> */}
            </div>
            {/* <!-- Bottom End --> */}
          </div>
        </div>
      </div>

      {/* <!-- Sidebar End --> */}
    </>
  );
};

export default Sidebar;
