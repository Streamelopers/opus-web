import RemoteBadge from "@/components/RemoteBadge";
import { Box, HStack, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { formatDate, timeago } from "@/utils/utils";

type JobInfoProps = {
  location: string;
  jobType: string;
  currencyCode?: string;
  minSalary?: number;
  maxSalary?: number;
  createdAt: string;
  isRemote: boolean;
  isRemoteOnly: boolean;
};

// TODO: Add icons

const JobInfo: FC<JobInfoProps> = ({
  location,
  jobType,
  currencyCode,
  minSalary,
  maxSalary,
  createdAt,
  isRemote,
  isRemoteOnly
}: JobInfoProps) => {
  return (
    <HStack spacing="35px" bg="gray.50" height="80px" padding="15px" borderRadius="10px">
      <Box h="40px">
        <Text fontWeight="700">Ubicación</Text>
        <Text>
          <Box as="span">{location}</Box>
          <Box mr="1" as="span">
            {location && (isRemote || isRemoteOnly) ? "," : ""}
          </Box>
          <Box as="span">
            {isRemote || isRemoteOnly ? <RemoteBadge isRemote={isRemote} isRemoteOnly={isRemoteOnly} /> : ""}
          </Box>
        </Text>
      </Box>
      <Box h="40px">
        <Text fontWeight="700">Tipo de Trabajo</Text>
        <Text>{jobType}</Text>
      </Box>
      {(minSalary || maxSalary) && (
        <Box h="40px">
          <Text fontWeight="700">Salario</Text>
          <Text>
            {currencyCode} {minSalary}
            {minSalary && maxSalary ? "-" : ""}
            {maxSalary}
          </Text>
        </Box>
      )}
      <Box h="40px">
        <Text fontWeight="700">Publicado</Text>
        <Text title={formatDate(createdAt)}>{timeago(createdAt)}</Text>
      </Box>
    </HStack>
  );
};

export default JobInfo;
