import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";

const Faq = () => {
  const [openItem, setOpenItem] = useState(1);
  return (
    <>
      <PageWrapper>
        <div className="jobDetails-section bg-default pt-md-30 pt-sm-25 pt-23 pb-md-27 pb-sm-20 pb-17">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-6 col-md-7 pr-xl-15"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="">
                  <h3 className="font-size-9 font-weight-bold mb-7 mb-lg-13">
                    Frequently Asked Questions
                  </h3>
                  <p className="font-size-4 mb-2">
                    Not seeing your question here?
                  </p>
                  <Link href="/#">
                    <a className="font-size-3 font-weight-bold text-green text-uppercase">
                      Chat with us
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className="col-xl-6 col-md-11"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="faq-content pt-lg-4 pt-6">
                  <div
                    className="accordion rounded-10 border-green border-top-5 pl-1"
                    id="accordionExample"
                  >
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-1">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(1)}
                          aria-expanded={openItem === 1}
                        >
                          How does the Jobium.com work?
                        </button>
                      </div>
                      <Collapse in={openItem === 1}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                            Yes. You can cancel your subscription anytime. Your
                            subscription will continue to be active until the
                            end of your current term (month or year) but it will
                            not auto-renew. Unless you delete your account
                            manually, your account and all data will be deleted
                            60 days from the day your subscription becomes
                            inactive.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-2">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(2)}
                          aria-expanded={openItem === 2}
                        >
                          Do you offer non-profit and educational discounts?
                        </button>
                      </div>
                      <Collapse in={openItem === 2}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                            Yes. You can cancel your subscription anytime. Your
                            subscription will continue to be active until the
                            end of your current term (month or year) but it will
                            not auto-renew. Unless you delete your account
                            manually, your account and all data will be deleted
                            60 days from the day your subscription becomes
                            inactive.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-3">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(3)}
                          aria-expanded={openItem === 3}
                        >
                          Can I cancel my subscription anytime?
                        </button>
                      </div>
                      <Collapse in={openItem === 3}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                            Yes. You can cancel your subscription anytime. Your
                            subscription will continue to be active until the
                            end of your current term (month or year) but it will
                            not auto-renew. Unless you delete your account
                            manually, your account and all data will be deleted
                            60 days from the day your subscription becomes
                            inactive.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-4">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(4)}
                          aria-expanded={openItem === 4}
                        >
                          How does the Jobium.com work?
                        </button>
                      </div>
                      <Collapse in={openItem === 4}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                            Yes. You can cancel your subscription anytime. Your
                            subscription will continue to be active until the
                            end of your current term (month or year) but it will
                            not auto-renew. Unless you delete your account
                            manually, your account and all data will be deleted
                            60 days from the day your subscription becomes
                            inactive.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-5">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(5)}
                          aria-expanded={openItem === 5}
                        >
                          How does the Jobium.com work?
                        </button>
                      </div>
                      <Collapse in={openItem === 5}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                            Yes. You can cancel your subscription anytime. Your
                            subscription will continue to be active until the
                            end of your current term (month or year) but it will
                            not auto-renew. Unless you delete your account
                            manually, your account and all data will be deleted
                            60 days from the day your subscription becomes
                            inactive.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-6">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(6)}
                          aria-expanded={openItem === 6}
                        >
                          Do you offer non-profit and educational discounts?
                        </button>
                      </div>
                      <Collapse in={openItem === 6}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                            Yes. You can cancel your subscription anytime. Your
                            subscription will continue to be active until the
                            end of your current term (month or year) but it will
                            not auto-renew. Unless you delete your account
                            manually, your account and all data will be deleted
                            60 days from the day your subscription becomes
                            inactive.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-7">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(7)}
                          aria-expanded={openItem === 7}
                        >
                          Can I cancel my subscription anytime?
                        </button>
                      </div>
                      <Collapse in={openItem === 7}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                            Yes. You can cancel your subscription anytime. Your
                            subscription will continue to be active until the
                            end of your current term (month or year) but it will
                            not auto-renew. Unless you delete your account
                            manually, your account and all data will be deleted
                            60 days from the day your subscription becomes
                            inactive.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-8">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(8)}
                          aria-expanded={openItem === 8}
                        >
                          How does the Jobium.com work?
                        </button>
                      </div>
                      <Collapse in={openItem === 8}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                            Yes. You can cancel your subscription anytime. Your
                            subscription will continue to be active until the
                            end of your current term (month or year) but it will
                            not auto-renew. Unless you delete your account
                            manually, your account and all data will be deleted
                            60 days from the day your subscription becomes
                            inactive.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-9">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(9)}
                          aria-expanded={openItem === 9}
                        >
                          Do you offer non-profit and educational discounts?
                        </button>
                      </div>
                      <Collapse in={openItem === 9}>
                        <div className="cpr-7">
                          <div className="mt-n3 font-size-4 text-gray font-weight-normal pb-7 pr-7 pt-6">
                            Yes. You can cancel your subscription anytime. Your
                            subscription will continue to be active until the
                            end of your current term (month or year) but it will
                            not auto-renew. Unless you delete your account
                            manually, your account and all data will be deleted
                            60 days from the day your subscription becomes
                            inactive.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Faq;
