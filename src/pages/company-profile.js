import React from "react";
import { Nav, Tab } from "react-bootstrap";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";

import imgF1 from "../assets/image/l2/png/featured-job-logo-1.png";
import imgB1 from "../assets/image/l1/png/feature-brand-1.png";
import imgB2 from "../assets/image/l1/png/feature-brand-4.png";
import imgB3 from "../assets/image/l1/png/feature-brand-5.png";
import imgB4 from "../assets/image/l3/png/github-mark.png";
import imgB5 from "../assets/image/l3/png/universal.png";

const CandidateProfile = () => {
  return (
    <>
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div className="bg-default-2 pt-16 pt-lg-22 pb-lg-27">
          <div className="container">
            {/* <!-- back Button --> */}
            <div className="row justify-content-center">
              <div className="col-12 mt-13 dark-mode-texts">
                <div className="mb-9">
                  <Link href="/#">
                    <a className="d-flex align-items-center ml-4">
                      <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                      <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                        Back
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- back Button End --> */}
            <div className="row ">
              {/* <!-- Company Profile --> */}
              <div className="col-12 col-xl-9 col-lg-8">
                <div className="bg-white rounded-4 pt-11 shadow-9">
                  <div className="d-xs-flex align-items-center pl-xs-12 mb-8 text-center text-xs-left">
                    <Link href="/#">
                      <a className="mr-xs-7 mb-5 mb-xs-0">
                        <img
                          className="square-72 rounded-6"
                          src={imgF1}
                          alt=""
                        />
                      </a>
                    </Link>
                    <div className="">
                      <h2 className="mt-xs-n5">
                        <Link href="/#">
                          <a className="font-size-6 text-black-2 font-weight-semibold">
                            Airbnb INC.
                          </a>
                        </Link>
                      </h2>
                      <span className="mb-0 text-gray font-size-4">
                        Online Marketplace
                      </span>
                    </div>
                  </div>
                  {/* <!-- Tab Section Start --> */}
                  <Tab.Container id="left-tabs-example" defaultActiveKey="jobs">
                    <Nav
                      className="nav border-bottom border-mercury pl-12"
                      role="tablist"
                    >
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="company"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Company
                        </Nav.Link>
                      </li>
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="jobs"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Jobs
                        </Nav.Link>
                      </li>
                    </Nav>
                    {/* <!-- Tab Content --> */}
                    <Tab.Content className="pl-12 pt-10 pb-7 pr-12 pr-xxl-24">
                      <Tab.Pane eventKey="company">
                        {/* <!-- Middle Body Start --> */}
                        <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                            <div className="mb-8">
                              <p className="font-size-4">Company size</p>
                              <h5 className="font-size-4 font-weight-semibold text-black-2">
                                11-50 employees
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Est. Since</p>
                              <h5 className="font-size-4 font-weight-semibold text-black-2">
                                2020
                              </h5>
                            </div>
                          </div>
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                            <div className="mb-8">
                              <p className="font-size-4">Type of corporation</p>
                              <h5 className="font-size-4 font-weight-semibold text-black-2">
                                B2B &amp; B2C
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Social Media</p>
                              <div className="icon-link d-flex align-items-center">
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
                                    <i className="fa fa-globe"></i>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                            <div className="mb-8">
                              <p className="font-size-4">Location</p>
                              <h5 className="font-size-4 font-weight-semibold text-black-2">
                                New York City
                              </h5>
                            </div>
                          </div>
                          {/* <!-- Single Widgets End --> */}
                        </div>
                        {/* <!-- Middle Body End --> */}
                        {/* <!-- Excerpt Start --> */}
                        <h4 className="font-size-6 mb-7 text-black-2 font-weight-semibold">
                          About Airbnb
                        </h4>
                        <div className="pt-5 ">
                          <p className="font-size-4 mb-8">
                            If you’re like most of my clients, you know creative
                            content marketing and killer copywriting are
                            fundamental to the success of your business.
                          </p>
                          <p className="font-size-4 mb-8">
                            But with so much to do to keep your business
                            growing, you don’t have time to learn how to write
                            sales copy that actually sells, or create a content
                            marketing strategy that resonates with your target
                            audience.
                          </p>
                          <p className="font-size-4  mb-8">
                            You’ve been disappointed with your traffic and
                            conversions so far, but with an overwhelming number
                            of things to do, you’ve put off doing anything about
                            it until now.
                          </p>
                          <p className="font-size-4 mb-8">
                            So you’ve come to Upwork, looking for someone that
                            can craft creative content and killer sales copy to
                            help you reach more people and make more sales.
                          </p>
                          <p className="font-size-4 mb-8">
                            But your troubles aren’t over just yet; it isn’t
                            easy to find someone who can create the high-quality
                            content you need. But your troubles aren’t over just
                            yet.
                          </p>
                        </div>
                        {/* <!-- Excerpt End --> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="jobs">
                        {/* <!-- Middle Body Start --> */}
                        <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                            <div className="mb-8">
                              <p className="font-size-4">Company size</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                11-50 employees
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Est. Since</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                2020
                              </h5>
                            </div>
                          </div>
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                            <div className="mb-8">
                              <p className="font-size-4">Type of corporation</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                B2B &amp; B2C
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Social Media</p>
                              <div className="icon-link d-flex align-items-center">
                                <Link href="/#">
                                  <a className="text-smoke circle-32 bg-concrete mr-5">
                                    <i className="fab fa-linkedin"></i>
                                  </a>
                                </Link>
                                <Link href="/#">
                                  <a className="text-smoke circle-32 bg-concrete mr-5">
                                    <i className="fab fa-facebook-f"></i>
                                  </a>
                                </Link>
                                <Link href="/#">
                                  <a className="text-smoke circle-32 bg-concrete mr-5">
                                    <i className="fab fa-twitter"></i>
                                  </a>
                                </Link>
                                <Link href="/#">
                                  <a className="text-smoke circle-32 bg-concrete mr-5">
                                    <i className="fa fa-globe"></i>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                            <div className="mb-8">
                              <p className="font-size-4">Location</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                New York City
                              </h5>
                            </div>
                          </div>
                          {/* <!-- Single Widgets End --> */}
                        </div>
                        {/* <!-- Middle Body End --> */}
                        {/* <!-- Excerpt Start --> */}
                        <div className="pr-xl-0 pr-xxl-22 pt-5">
                          <h4 className="font-size-6 mb-7">Job Airbnb</h4>
                          <p className="font-size-4 mb-8">
                            If you’re like most of my clients, you know creative
                            content marketing and killer copywriting are
                            fundamental to the success of your business.
                          </p>
                          <p className="font-size-4 mb-8">
                            But with so much to do to keep your business
                            growing, you don’t have time to learn how to write
                            sales copy that actually sells, or create a content
                            marketing strategy that resonates with your target
                            audience.
                          </p>
                          <p className="font-size-4  mb-8">
                            You’ve been disappointed with your traffic and
                            conversions so far, but with an overwhelming number
                            of things to do, you’ve put off doing anything about
                            it until now.
                          </p>
                          <p className="font-size-4 mb-8">
                            So you’ve come to Upwork, looking for someone that
                            can craft creative content and killer sales copy to
                            help you reach more people and make more sales.
                          </p>
                          <p className="font-size-4 mb-8">
                            But your troubles aren’t over just yet; it isn’t
                            easy to find someone who can create the high-quality
                            content you need. But your troubles aren’t over just
                            yet.
                          </p>
                        </div>
                        {/* <!-- Excerpt End --> */}
                      </Tab.Pane>
                    </Tab.Content>
                    {/* <!-- Tab Content End --> */}
                    {/* <!-- Tab Section End --> */}
                  </Tab.Container>
                </div>
              </div>
              {/* <!-- Company Profile End --> */}
              {/* <!-- Sidebar --> */}
              <div className="col-12 col-xl-3 col-lg-4 col-md-5 col-sm-6">
                <div className="pt-11 pt-lg-0 pl-lg-5">
                  <h4 className="font-size-6 font-weight-semibold mb-0">
                    Similar Companies
                  </h4>
                  <ul className="list-unstyled">
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link href="/#">
                        <a className="media align-items-center py-9">
                          <div className="mr-7">
                            <img
                              className="square-72 rounded-5"
                              src={imgB1}
                              alt=""
                            />
                          </div>
                          <div className="mt-n4">
                            <h4 className="mb-0 font-size-6 font-weight-semibold">
                              Google INC.
                            </h4>
                            <p className="mb-0 font-size-4">
                              Online Marketplace
                            </p>
                          </div>
                        </a>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link href="/#">
                        <a className="media align-items-center py-9">
                          <div className="mr-7">
                            <img
                              className="square-72 rounded-5"
                              src={imgB2}
                              alt=""
                            />
                          </div>
                          <div className="mt-n4">
                            <h4 className="mb-0 font-size-6 font-weight-semibold">
                              Uber
                            </h4>
                            <p className="mb-0 font-size-4">
                              Ride Sharing Company
                            </p>
                          </div>
                        </a>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link href="/#">
                        <a className="media align-items-center py-9">
                          <div className="mr-7">
                            <img
                              className="square-72 rounded-5"
                              src={imgB3}
                              alt=""
                            />
                          </div>
                          <div className="mt-n4">
                            <h4 className="mb-0 font-size-6 font-weight-semibold">
                              Facebook
                            </h4>
                            <p className="mb-0 font-size-4">Social Network</p>
                          </div>
                        </a>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link href="/#">
                        <a className="media align-items-center py-9">
                          <div className="mr-5">
                            <img
                              className="square-72 rounded-5"
                              src={imgB4}
                              alt=""
                            />
                          </div>
                          <div className="mt-n4">
                            <h4 className="mb-0 font-size-6 font-weight-semibold">
                              GitHub
                            </h4>
                            <p className="mb-0 font-size-4">Online Software</p>
                          </div>
                        </a>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="">
                      <Link href="/#">
                        <a className="media align-items-center py-9">
                          <div className="mr-7">
                            <img
                              className="square-72 rounded-5"
                              src={imgB5}
                              alt=""
                            />
                          </div>
                          <div className="mt-n4">
                            <h4 className="mb-0 font-size-6 font-weight-semibold">
                              Uniliver
                            </h4>
                            <p className="mb-0 font-size-4">Manufacturer</p>
                          </div>
                        </a>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                  </ul>
                </div>
              </div>
              {/* <!-- end Sidebar --> */}
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default CandidateProfile;
