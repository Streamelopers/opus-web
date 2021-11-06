import React from "react";
import Link from "next/link";
import imgB1 from "../../assets/image/l2/png/blog-img1.png";
import imgB2 from "../../assets/image/l2/png/blog-img2.png";
import imgB3 from "../../assets/image/l2/png/blog-img3.png";

import imgBU1 from "../../assets/image/l2/png/blog-user-img1.png";
import imgBU2 from "../../assets/image/l2/png/blog-user-img2.png";
import imgBU3 from "../../assets/image/l2/png/blog-user-img3.png";

const Blog = () => {
  return (
    <>
      {/* <!-- Blog Area --> */}
      <div className="pt-11 pt-lg-24 pb-11 pb-lg-24">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-7 col-lg-8 col-md-10"
              data-aos="fade-in"
              data-aos-duration="1000"
            >
              {/* <!-- section-title start --> */}
              <div className="section-title text-center pb-lg-15 pb-8 px-xxl-10">
                <h2 className="mb-9 font-size-10">Quick career tips</h2>
                <p className="text-default-color font-size-5">
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate{" "}
                </p>
              </div>
              {/* <!-- section-title end --> */}
            </div>
          </div>
          <div className="row justify-content-center">
            {/* <!-- single blog start --> */}
            <div
              className="col-xl-4 col-md-6 mb-xl-0 mb-13"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              {/* <!-- card start --> */}
              <div className="card bg-transparent border-0">
                {/* <!-- card img start --> */}
                <img src={imgB1} className="card-img-top" alt="..." />
                {/* <!-- card img end --> */}
                {/* <!-- card-body start --> */}
                <div className="card-body pt-11 px-0 pb-0">
                  <Link href="/#">
                    <a className="text-uppercase font-size-3 font-weight-bold px-4 py-1">
                      CV Writing
                    </a>
                  </Link>
                  <h4>
                    <Link href="/#">
                      <a className="card-title font-size-7 mt-8 mb-6 heading-default-color">
                        How to make a perfect CV that attracts the attention{" "}
                      </a>
                    </Link>
                  </h4>
                  <p className="card-text mb-9 font-size-4">
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base.
                  </p>
                  {/* <!-- media start --> */}
                  <div className="media mb-5 pr-9">
                    {/* <!-- media img start --> */}
                    <Link href="/#">
                      <a>
                        <img
                          src={imgBU1}
                          className="align-self-center circle-54 mr-3 mt-2"
                          alt=""
                        />
                      </a>
                    </Link>
                    {/* <!-- media img start --> */}
                    {/* <!-- media body start --> */}
                    <div className="media-body pl-4 pt-2">
                      <h6 className="mb-0">
                        <Link href="/#">
                          <a className="mb-0 font-size-4 font-weight-semibold heading-default-color line-height-reset">
                            Anna Frank
                          </a>
                        </Link>
                      </h6>
                      <p className="mb-0">
                        <Link href="/#">
                          <a className="font-size-3 text-default-color">
                            Creative Director
                          </a>
                        </Link>
                      </p>
                    </div>
                    {/* <!-- media body start --> */}
                  </div>
                  {/* <!-- media end --> */}
                </div>
                {/* <!-- card-body end --> */}
              </div>
              {/* <!-- card end --> */}
            </div>
            {/* <!-- single blog end --> */}
            {/* <!-- single blog start --> */}
            <div
              className="col-xl-4 col-md-6 mb-xl-0 mb-13"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              {/* <!-- card start --> */}
              <div className="card bg-transparent border-0">
                {/* <!-- card img start --> */}
                <Link href="/#">
                  <a>
                    <img src={imgB2} className="card-img-top" alt="..." />
                  </a>
                </Link>
                {/* <!-- card img end --> */}
                {/* <!-- card-body start --> */}
                <div className="card-body pt-11 px-0 pb-0">
                  <Link href="/#">
                    <a className="text-uppercase font-size-3 font-weight-bold px-4 py-1">
                      Marketing
                    </a>
                  </Link>
                  <h4>
                    <Link href="/#">
                      <a className="card-title font-size-7 mt-8 mb-6 heading-default-color">
                        Out bound marketing to get the job you want within 72
                        days
                      </a>
                    </Link>
                  </h4>
                  <p className="card-text mb-9 font-size-4">
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base.
                  </p>
                  {/* <!-- media start --> */}
                  <div className="media mb-5 pr-9">
                    {/* <!-- media img start --> */}
                    <Link href="/#">
                      <a>
                        <img
                          src={imgBU2}
                          className="align-self-center circle-54 mr-3 mt-2"
                          alt=""
                        />
                      </a>
                    </Link>
                    {/* <!-- media img start --> */}
                    {/* <!-- media body start --> */}
                    <div className="media-body pl-4 pt-2">
                      <h6 className="mb-0">
                        <Link href="/#">
                          <a className="font-size-4 font-weight-semibold heading-default-color line-height-reset">
                            David Herison
                          </a>
                        </Link>
                      </h6>
                      <p className="mb-0">
                        <Link href="/#">
                          <a className="font-size-3 text-default-color">
                            UX Designer
                          </a>
                        </Link>
                      </p>
                    </div>
                    {/* <!-- media body start --> */}
                  </div>
                  {/* <!-- media end --> */}
                </div>
                {/* <!-- card-body end --> */}
              </div>
              {/* <!-- card end --> */}
            </div>
            {/* <!-- single blog end --> */}
            {/* <!-- single blog start --> */}
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              {/* <!-- card start --> */}
              <div className="card bg-transparent border-0">
                {/* <!-- card img start --> */}
                <Link href="/#">
                  <a>
                    <img src={imgB3} className="card-img-top" alt="..." />
                  </a>
                </Link>
                {/* <!-- card img end --> */}
                {/* <!-- card-body start --> */}
                <div className="card-body pt-11 px-0 pb-0">
                  <Link href="/#">
                    <a className="text-uppercase font-size-3 font-weight-bold px-4 py-1">
                      Social media
                    </a>
                  </Link>
                  <h4>
                    <Link href="/#">
                      <a className="card-title font-size-7 mt-8 mb-6 heading-default-color">
                        Your social media accounts will be your new CV
                      </a>
                    </Link>
                  </h4>
                  <p className="card-text mb-9 font-size-4">
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approaches to corporate
                    strategy foster,
                  </p>
                  {/* <!-- media start --> */}
                  <div className="media mb-5 pr-9 align-items-center">
                    {/* <!-- media img start --> */}
                    <img
                      src={imgBU3}
                      className="align-self-center circle-54 mr-3"
                      alt=""
                    />
                    {/* <!-- media img start --> */}
                    {/* <!-- media body start --> */}
                    <div className="media-body pl-4 pt-2">
                      <h6 className="mb-0">
                        <Link href="/#">
                          <a className="mb-0 font-size-4 font-weight-semibold heading-default-color line-height-reset">
                            Benjamin Linkon
                          </a>
                        </Link>
                      </h6>
                      <p className="mb-0">
                        <Link href="/#">
                          <a className="font-size-3 text-default-color line-height-reset">
                            JavaScript Developer
                          </a>
                        </Link>
                      </p>
                    </div>
                    {/* <!-- media body start --> */}
                  </div>
                  {/* <!-- media end --> */}
                </div>
                {/* <!-- card-body end --> */}
              </div>
              {/* <!-- card end --> */}
            </div>
            {/* <!-- single blog end --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
