import RemoteBadge from "@/components/RemoteBadge";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { JobWizard } from "@/components/JobWizard";

type JobInfoProps = {};

const JobInfo: FC<JobInfoProps> = ({}: JobInfoProps) => {
  return (
    <HStack spacing="35px" bg="blue.50" height="80px" padding="15px" borderRadius="10px">
      <Box h="40px">Crear empleo</Box>
      <JobWizard />
    </HStack>
  );
};

export default JobInfo;
