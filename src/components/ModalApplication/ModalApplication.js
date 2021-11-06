import React, { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import ProfileSidebar from "../ProfileSidebar";

import imgF1 from "../../assets/image/l2/png/featured-job-logo-1.png";
import imgF2 from "../../assets/image/l1/png/feature-brand-1.png";
import imgF3 from "../../assets/image/svg/harvard.svg";
import imgF4 from "../../assets/image/svg/mit.svg";
import imgL from "../../assets/image/svg/icon-loaction-pin-black.svg";

const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
  .modal-dialog {
    margin: 1.75rem auto;
    max-width: 100%;
  }
  .modal-content {
    background: transparent;
  }
`;

const ModalSignIn = (props) => {
  const gContext = useContext(GlobalContext);

  const handleClose = () => {
    gContext.toggleApplicationModal();
  };

  return (
    <ModalStyled
      {...props}
      size="lg"
      centered
      show={gContext.applicationModalVisible}
      onHide={gContext.toggleApplicationModal}
    >
      <Modal.Body className="p-0">
        <div className="container position-relative">
          <button
            type="button"
            className="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper"
            onClick={handleClose}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="login-modal-main bg-white rounded-8 overflow-hidden">
            <div className="row no-gutters">
              {/* <!-- Left Sidebar Start --> */}
              <div className="col-12 col-xl-3 col-lg-4 col-md-5 mb-13 mb-lg-0 border-right border-mercury">
                <ProfileSidebar />
              </div>
              {/* <!-- Left Sidebar End --> */}
              {/* <!-- Middle Content --> */}
              <div className="col-12 col-xl-6 col-lg-8 col-md-7 order-2 order-lg-1 border-right border-mercury">
                <div className="bg-white rounded-4 overflow-auto h-1173">
                  {/* <!-- Excerpt Start --> */}
                  <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
                    <h4 className="font-size-6 font-weight-semibold mb-7 mt-5 text-black-2">
                      About
                    </h4>
                    <p className="font-size-4 mb-8">
                      A talented professional with an academic background in IT
                      and proven commercial development experience as C++
                      developer since 1999. Has a sound knowledge of the
                      software development life cycle. Was involved in more than
                      140 software development outsourcing projects.
                    </p>
                    <p className="font-size-4 mb-8">
                      Programming Languages: C/C++, .NET C++, Python, Bash,
                      Shell, PERL, Regular expressions, Python, Active-script.
                    </p>
                  </div>
                  {/* <!-- Excerpt End --> */}
                  {/* <!-- Skills --> */}
                  <div className="border-top border-mercury pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                    <h4 className="font-size-6 font-weight-semibold mb-7 mt-5 text-black-2">
                      Skills
                    </h4>
                    <ul className="list-unstyled d-flex align-items-center flex-wrap">
                      <li>
                        <Link href="/#">
                          <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                            Agile
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                            Wireframing
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                            Prototyping
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                            Information
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                            Waterfall Model
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                            New Layout
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                            Browsing
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Skills End --> */}
                  {/* <!-- Card Section Start --> */}
                  <div className="border-top border-mercury p-5 pl-xs-12 pt-7 pb-5">
                    <h4 className="font-size-6 font-weight-semibold mb-7 mt-5 text-black-2">
                      Work Exprerience
                    </h4>
                    {/* <!-- Single Card --> */}
                    <div className="w-100">
                      <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                        <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                          <img src={imgF1} alt="" />
                        </div>
                        <div className="w-100 mt-n2">
                          <h3 className="mb-0">
                            <Link href="/#">
                              <a className="font-size-5 font-weight-semibold text-black-2">
                                Lead Product Designer
                              </a>
                            </Link>
                          </h3>
                          <Link href="/#">
                            <a className="font-size-4 text-default-color line-height-2">
                              Airabnb
                            </a>
                          </Link>
                          <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                            <Link href="/#" href="">
                              <a className="font-size-3 text-gray">
                                Jun 2017 - April 2020- 3 years
                              </a>
                            </Link>
                            <Link href="/#">
                              <a className="font-size-3 text-gray">
                                <span
                                  className="mr-4"
                                  css={`
                                    margin-top: -2px;
                                  `}
                                >
                                  <img src={imgL} alt="" />
                                </span>
                                New York, USA
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Single Card End --> */}
                    {/* <!-- Single Card --> */}
                    <div className="w-100">
                      <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                        <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                          <img src={imgF2} alt="" />
                        </div>
                        <div className="w-100 mt-n2">
                          <h3 className="mb-0">
                            <Link href="/#">
                              <a className="font-size-5 font-weight-semibold text-black-2">
                                Senior UI/UX Designer
                              </a>
                            </Link>
                          </h3>
                          <Link href="/#">
                            <a className="font-size-4 text-default-color line-height-2">
                              Google Inc
                            </a>
                          </Link>
                          <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                            <Link href="/#">
                              <a className="font-size-3 text-gray">
                                Jun 2017 - April 2020- 3 years
                              </a>
                            </Link>
                            <Link href="/#">
                              <a className="font-size-3 text-gray">
                                <span
                                  className="mr-4"
                                  css={`
                                    margin-top: -2px;
                                  `}
                                >
                                  <img src={imgL} alt="" />
                                </span>
                                New York, USA
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Single Card End --> */}
                  </div>
                  {/* <!-- Card Section End --> */}
                  {/* <!-- Card Section Start --> */}
                  <div className="border-top border-mercury p-5 pl-xs-12 pt-7 pb-5">
                    <h4 className="font-size-6 font-weight-semibold mb-7 mt-5 text-black-2">
                      Education
                    </h4>
                    {/* <!-- Single Card --> */}
                    <div className="w-100">
                      <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                        <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                          <img src={imgF3} alt="" />
                        </div>
                        <div className="w-100 mt-n2">
                          <h3 className="mb-0">
                            <Link href="/#">
                              <a className="font-size-5 font-weight-semibold text-black-2">
                                Masters in Art Design
                              </a>
                            </Link>
                          </h3>
                          <Link href="/#">
                            <a className="font-size-4 text-default-color line-height-2">
                              Harvard University
                            </a>
                          </Link>
                          <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                            <Link href="/#">
                              <a className="font-size-3 text-gray">
                                Jun 2017 - April 2020- 3 years
                              </a>
                            </Link>
                            <Link href="/#">
                              <a className="font-size-3 text-gray">
                                <span
                                  className="mr-4"
                                  css={`
                                    margin-top: -2px;
                                  `}
                                >
                                  <img src={imgL} alt="" />
                                </span>
                                Brylin, USA
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Single Card End --> */}
                    {/* <!-- Single Card --> */}
                    <div className="w-100">
                      <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                        <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                          <img className="circle-72" src={imgF4} alt="" />
                        </div>
                        <div className="w-100 mt-n2">
                          <h3 className="mb-0">
                            <Link href="/#">
                              <a className="font-size-5 font-weight-semibold text-black-2">
                                Bachelor in Software Engineering{" "}
                              </a>
                            </Link>
                          </h3>
                          <Link href="/#">
                            <a className="font-size-4 text-default-color line-height-2">
                              Manipal Institute of Technology
                            </a>
                          </Link>
                          <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                            <Link href="/#">
                              <a className="font-size-3 text-gray">
                                Fed 2012 - April 2016 - 4 years
                              </a>
                            </Link>
                            <Link href="/#">
                              <a className="font-size-3 text-gray">
                                <span
                                  className="mr-4"
                                  css={`
                                    margin-top: -2px;
                                  `}
                                >
                                  <img src={imgL} alt="" />
                                </span>
                                New York, USA
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Single Card End --> */}
                    {/* <!-- Single Card --> */}
                    <div className="w-100">
                      <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                        <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                          <img className="circle-72" src={imgF4} alt="" />
                        </div>
                        <div className="w-100 mt-n2">
                          <h3 className="mb-0">
                            <Link href="/#">
                              <a className="font-size-5 font-weight-semibold text-black-2">
                                Bachelor in Software Engineering{" "}
                              </a>
                            </Link>
                          </h3>
                          <Link href="/#">
                            <a className="font-size-4 text-default-color line-height-2">
                              Manipal Institute of Technology
                            </a>
                          </Link>
                          <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                            <Link href="/#">
                              <a className="font-size-3 text-gray">
                                Fed 2012 - April 2016 - 4 years
                              </a>
                            </Link>
                            <Link href="/#">
                              <a className="font-size-3 text-gray">
                                <span
                                  className="mr-4"
                                  css={`
                                    margin-top: -2px;
                                  `}
                                >
                                  <img src={imgL} alt="" />
                                </span>
                                New York, USA
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Single Card End --> */}
                  </div>
                  {/* <!-- Card Section End --> */}
                </div>
              </div>
              {/* <!-- Middle Content --> */}
              {/* <!-- Right Sidebar Start --> */}
              <div className="col-12 col-xl-3 order-3 order-lg-2 bg-default-2">
                <div className="text-center mb-13 mb-lg-0 mt-12">
                  <button className="btn btn-primary btn-xl mb-7 d-block mx-auto text-uppercase">
                    Contact
                  </button>
                  <button className="btn btn-outline-gray btn-xl mb-7 d-block mx-auto text-uppercase">
                    Reject
                  </button>
                </div>
              </div>
              {/* <!-- Right Sidebar End --> */}
            </div>
          </div>
        </div>
      </Modal.Body>
    </ModalStyled>
  );
};

export default ModalSignIn;
