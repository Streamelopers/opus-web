import React, { FC, useEffect, useState } from "react";
import jobsData from "../data/jobs.json";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import Search from "@/components/Search";
import JobCard from "@/components/JobCard";
import { Job } from "types/Job";
import groupBy from "lodash/groupBy";
import { JobTypeName } from "types/JobType";
import Page from "@/components/Page";

type JobsProps = {
  jobs: Array<Job>;
};

const Home: FC<JobsProps> = ({ jobs }: JobsProps) => {
  const [categoryIndex, setCategoryIndex] = useState<number>(0);
  const [categorizedJobs, setCategorizedJobs] = useState<{ [key: number]: Job[] }>();

  const handleTabsChange = (tabIndex: number) => {
    if (tabIndex !== categoryIndex) {
      setCategoryIndex(tabIndex);
    }
  };

  useEffect(() => {
    setCategorizedJobs(groupBy(jobs, "JobTypeId"));
  }, []);

  return (
    <Page
      title="Lista de empleos"
      description="Opus Web es el mejor sitio para encotrar empleo en República Dominicana"
    >
      <div className="home-container container">
        <div className="hero">{/* <Hero /> */}</div>

        <Search />

        <Box mt="2">
          <Tabs index={categoryIndex} variant="enclosed" onChange={handleTabsChange}>
            <TabList>
              <Tab>Todos los Empleos</Tab>
              <Tab>Tiempo Completo</Tab>
              <Tab>Medio Tiempo</Tab>
              <Tab>Freelance</Tab>
              <Tab>Temporal</Tab>
              <Tab>Pasantía</Tab>
              <Tab>Remoto</Tab>
            </TabList>
            <TabPanels>
              <TabPanel pt="5" pl="0" pr="0" pb="2">
                {jobs.map((job: Job) => (
                  <Box mb="5" key={job.Id}>
                    <JobCard job={job} />
                  </Box>
                ))}
              </TabPanel>
              <TabPanel pt="5" pl="0" pr="0" pb="2">
                {categorizedJobs?.[JobTypeName.FULL_TIME]?.map((job: Job) => (
                  <Box mb="5" key={job.Id}>
                    <JobCard job={job} />
                  </Box>
                ))}
              </TabPanel>
              <TabPanel pt="5" pl="0" pr="0" pb="2">
                {categorizedJobs?.[JobTypeName.PART_TIME]?.map((job: Job) => (
                  <Box mb="5" key={job.Id}>
                    <JobCard job={job} />
                  </Box>
                ))}
              </TabPanel>
              <TabPanel pt="5" pl="0" pr="0" pb="2">
                {categorizedJobs?.[JobTypeName.FREELANCE]?.map((job: Job) => (
                  <Box mb="5" key={job.Id}>
                    <JobCard job={job} />
                  </Box>
                ))}
              </TabPanel>
              <TabPanel pt="5" pl="0" pr="0" pb="2">
                {categorizedJobs?.[JobTypeName.TEMPORARY]?.map((job: Job) => (
                  <Box mb="5" key={job.Id}>
                    <JobCard job={job} />
                  </Box>
                ))}
              </TabPanel>
              <TabPanel pt="5" pl="0" pr="0" pb="2">
                {categorizedJobs?.[JobTypeName.INTERNSHIPS]?.map((job: Job) => (
                  <Box mb="5" key={job.Id}>
                    <JobCard job={job} />
                  </Box>
                ))}
              </TabPanel>
              <TabPanel pt="5" pl="0" pr="0" pb="2">
                {jobs.map((job: Job) => {
                  return (
                    (job.IsRemote || job.IsRemoteOnly) && (
                      <Box mb="5" key={job.Id}>
                        <JobCard job={job} />
                      </Box>
                    )
                  );
                })}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </div>
    </Page>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      jobs: jobsData
    }
  };
};

export default Home;
