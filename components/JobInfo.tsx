import RemoteBadge from "@/components/RemoteBadge";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
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
    <HStack spacing="35px" bg="blue.50" height="80px" padding="15px" borderRadius="10px">
      <Box h="40px">
        <Text fontWeight="700">Ubicación</Text>
        <Flex alignItems="center">
          <Box as="span">{location}</Box>
          <Box mr="1" as="span">
            {location && (isRemote || isRemoteOnly) ? "," : ""}
          </Box>
          {isRemote || isRemoteOnly ? <RemoteBadge isRemote={isRemote} isRemoteOnly={isRemoteOnly} /> : ""}
        </Flex>
      </Box>
      <Box h="40px">
        <Text fontWeight="700">Tipo de Trabajo</Text>
        <Text>{jobType}</Text>
      </Box>
      {(minSalary || maxSalary) && (
        <Box h="40px">
          <Text fontWeight="700">Salario</Text>
          <Text>
            {currencyCode} {minSalary ? new Intl.NumberFormat().format(minSalary) : null}
            {minSalary && maxSalary ? " - " : ""}
            {maxSalary ? new Intl.NumberFormat().format(maxSalary) : null}
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
