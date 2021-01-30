import React, { FC } from "react";

import JobCard from "../JobCard/JobCard";
import { GetStaticProps } from "next";
import { Job } from "types/Job";

type JobsProps = {
  jobs: Array<Job>;
  selectedCategory: number;
};

const Jobs: FC<JobsProps> = (props) => {
  return <div>ABC</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/jobs");
  const jobs = await res.json();
  console.log({ jobs });
  return {
    props: {
      jobs
    } // will be passed to the page component as props
  };
};

export default Jobs;
