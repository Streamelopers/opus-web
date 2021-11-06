import React from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";

const defaultJobs = [
  { value: "pd", label: "Product Designer" },
  { value: "gd", label: "Graphics Designer" },
  { value: "fd", label: "Frontend Developer" },
  { value: "bd", label: "Backend Developer" },
  { value: "cw", label: "Content Writer" },
];

const DashboardJobs = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          button: "profile",
          isFluid: true,
          bgClass: "bg-default",
          reveal: false,
        }}
      >
        <div className="dashboard-main-container mt-25 mt-lg-31">
          <div className="container">
            <div className="mb-18">
              <div className="row mb-11 align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <h3 className="font-size-6 mb-0">Posted Jobs (4)</h3>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
                    <p className="font-size-4 mb-0 mr-6 py-2">Filter by Job:</p>
                    <div className="h-px-48">
                      <Select
                        options={defaultJobs}
                        className="pl-0 h-100 arrow-3 arrow-3-black min-width-px-273  text-black-2 d-flex align-items-center w-100"
                        border={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-8 pt-7 rounded pb-9 px-11">
                <div className="table-responsive ">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="pl-0 border-0 font-size-4 font-weight-normal"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Job Type
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          City
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Created on
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Total Applicants
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        ></th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border border-color-2">
                        <th
                          scope="row"
                          className="pl-6 border-0 py-7 min-width-px-235"
                        >
                          <div className="">
                            <Link href="/job-details">
                              <a className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                Senior Project Manager
                              </a>
                            </Link>
                          </div>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-135">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            Full-Time
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-125">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            New York
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-155">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            12 July, 2020
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-205">
                          <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">
                            47
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-80">
                          <a
                            href="/#"
                            className="font-size-3 font-weight-bold text-green text-uppercase"
                          >
                            Edit
                          </a>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-100">
                          <a
                            href="/#"
                            className="font-size-3 font-weight-bold text-red-2 text-uppercase"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                      <tr className="border border-color-2">
                        <th
                          scope="row"
                          className="pl-6 border-0 py-7 min-width-px-235"
                        >
                          <div className="">
                            <Link href="/job-details">
                              <a className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                UI Designer
                              </a>
                            </Link>
                          </div>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-135">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            Full-Time
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-125">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            Remote
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-155">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            24 June, 2020
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-205">
                          <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">
                            145
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-80">
                          <a
                            href="/#"
                            className="font-size-3 font-weight-bold text-green text-uppercase"
                          >
                            Edit
                          </a>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-100">
                          <a
                            href="/#"
                            className="font-size-3 font-weight-bold text-red-2 text-uppercase"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                      <tr className="border border-color-2">
                        <th
                          scope="row"
                          className="pl-6 border-0 py-7 min-width-px-235"
                        >
                          <div className="">
                            <Link href="/job-details">
                              <a className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                Head of Marketing
                              </a>
                            </Link>
                          </div>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-135">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            Full-Time
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-125">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            London
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-155">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            15 June, 2020
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-205">
                          <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">
                            62
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-80">
                          <a
                            href="/#"
                            className="font-size-3 font-weight-bold text-green text-uppercase"
                          >
                            Edit
                          </a>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-100">
                          <a
                            href="/#"
                            className="font-size-3 font-weight-bold text-red-2 text-uppercase"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                      <tr className="border border-color-2">
                        <th
                          scope="row"
                          className="pl-6 border-0 py-7 min-width-px-235"
                        >
                          <div className="">
                            <Link href="/job-details">
                              <a className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                Full-Stack Developer
                              </a>
                            </Link>
                          </div>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-135">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            Part-Time
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-125">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            California
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-155">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            29 May, 2020
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-205">
                          <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">
                            184
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-80">
                          <a
                            href="/#"
                            className="font-size-3 font-weight-bold text-green text-uppercase"
                          >
                            Edit
                          </a>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-100">
                          <a
                            href="/#"
                            className="font-size-3 font-weight-bold text-red-2 text-uppercase"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default DashboardJobs;
