import React, { FC, useState } from "react";
// import Hero from "../Hero/Hero";
import Jobs from "../components/Jobs/Jobs";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import Search from "../components/Search/Search";
import { GetStaticProps } from "next";
import JobCard from "@/components/JobCard/JobCard";
import { Job } from "types/Job";

type JobsProps = {
  jobs: Array<Job>;
};

const Home: FC<JobsProps> = ({ jobs }: JobsProps) => {
  const [categoryIndex, setCategoryIndex] = useState<number>(1);

  const handleTabsChange = (tabIndex: number) => {
    if (tabIndex !== categoryIndex) {
      setCategoryIndex(tabIndex);
    }
  };

  return (
    <>
      <div className="home-container container">
        <div className="hero">{/* <Hero /> */}</div>

        <Search />

        <Box mt="2">
          <Tabs index={categoryIndex} variant="enclosed" onChange={handleTabsChange}>
            <TabList>
              {/* <Tab>All Jobs</Tab> */}
              <Tab>Full-time</Tab>
              <Tab>Part-time</Tab>
              <Tab>Freelance</Tab>
              <Tab>Temporary</Tab>
              <Tab>Intership</Tab>
              <Tab>Remote</Tab>
            </TabList>
            <TabPanels>
              <TabPanel pl="0" pr="0" pb="2">
                <JobCard job={jobs[0]} />
              </TabPanel>
              <TabPanel pl="0" pr="0" pb="2">
                <JobCard job={jobs[0]} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { API_URL } = process.env;
  const response = await fetch(`${API_URL}/jobs`);
  const jobs = await response.json();
  return {
    props: {
      jobs
    }
  };
};

export default Home;
