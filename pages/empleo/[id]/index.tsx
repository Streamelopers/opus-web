import Page from "@/components/Page";
import ShareButtons from "@/components/ShareButtons";
import JobHeader from "@/components/JobHeader";
import JobInfo from "@/components/JobInfo";
import { Box, Divider, Text } from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import React, { FC } from "react";
import { Job } from "types/Job";
import jobsData from "../../../data/jobs.json";
import HowToApply from "@/components/HowToApply";
import RelatedJobs from "@/components/RelatedJobs";
import Skills from "@/components/Skills";

type JobProps = {
  job: Job;
};

const JobDetails: FC<JobProps> = ({ job }: JobProps) => {
  return (
    <Page>
      <>
        <JobHeader
          location={job.Location.Name}
          picture={job.Company.Picture}
          title={job.Title}
          website={job.Company.Website}
        />
        <JobInfo
          createdAt={job.CreatedAt}
          currencyCode={job.Currency?.ISOCode}
          isRemote={job.IsRemote}
          isRemoteOnly={job.IsRemoteOnly}
          jobType={job.JobType.Name}
          location={job.Location.Name}
          maxSalary={job.MaxSalary}
          minSalary={job.MinSalary}
        />

        <Box mt="5" className="job-description">
          <Text fontWeight="600" fontSize="2xl">
            Descripción de la compañia
          </Text>
          <Divider mt="2" mb="3" />
          <Box>
            <div dangerouslySetInnerHTML={{ __html: job.Company.Description }} />
          </Box>
        </Box>

        <Box mt="5" className="job-description">
          <Text fontWeight="600" fontSize="2xl">
            Descripción del trabajo
          </Text>
          <Divider mt="2" mb="3" />
          <Box>
            <div dangerouslySetInnerHTML={{ __html: job.Description }} />
          </Box>
        </Box>

        <Skills />

        <HowToApply howToApply={job.HowToApply} applicationTarget={"http://google.com"} />

        <ShareButtons title={job.Title} description={job.Description} />

        <RelatedJobs />
      </>
    </Page>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  interface paramsType {
    params: {
      id: string;
    };
  }

  const params: Array<paramsType> = [];
  // TODO: Fix this later
  // @ts-ignore
  const list: Array<Job> = jobsData;

  list.forEach((job: Job) => {
    params.push({
      params: { id: job.Id.toString() }
    });
  });

  return { paths: params, fallback: false };
}

// This also gets called at build time
export async function getStaticProps(context: GetStaticPropsContext) {
  // const { origin } = absoluteUrl(context.e, "localhost:3000");
  // const resp = await fetch(`${origin}/api/users`);
  // const users = await resp.json();
  // return { users };

  // TODO: Fix this later
  // @ts-ignore
  const job = jobsData.find((job: Job) => job.Id.toString() === context.params?.id);
  return {
    props: {
      job
    }
  };
}

export default JobDetails;
