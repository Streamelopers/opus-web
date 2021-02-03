import { Box, Badge, Text, Flex, Link as Link, Icon, Center } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import React, { FC, useState } from "react";
import { Job } from "types/Job";
import { formatDate, timeago } from "utils/utils";
import { FaMapMarkerAlt, FaRegClock, FaBuilding } from "react-icons/fa";

type JobsCardProps = {
  job: Job;
};

const JobCard: FC<JobsCardProps> = ({ job }: JobsCardProps) => {
  const [isFeatured] = useState(false);
  const cardStyles = isFeatured
    ? {
        borderColor: "yellow.400",
        bg: "orange.50",
        _hover: {
          bg: "orange.100"
        }
      }
    : {
        borderColor: "gray.200",
        bg: "white",
        _hover: {
          bg: "gray.50"
        }
      };

  const getRemoteBadge = () => {
    if (job.IsRemote) {
      return (
        <Badge colorScheme="yellow" title="Trabajar de forma remota es una opción">
          Permite remoto
        </Badge>
      );
    }

    if (job.IsRemoteOnly) {
      return (
        <Badge colorScheme="green" title="Se trabaja de forma remota a tiempo completo">
          Remoto
        </Badge>
      );
    }
  };

  return (
    <Box position="relative" p="2" rounded="md" border="1px" {...cardStyles}>
      {/* Publish date Badge */}
      <Badge position="absolute" css={{ top: "-0.60rem" }} left="5" border="1px" borderColor="gray.200">
        <Flex alignItems="center" title={formatDate(job.CreatedAt)}>
          <Icon ml="1" mr="1" as={FaRegClock} /> {timeago(job.CreatedAt)}
        </Flex>
      </Badge>

      {/* Postion type badge */}
      <Badge
        position="absolute"
        top="-0.5"
        right="0"
        css={{ backgroundColor: "#ffc10780" }}
        p="2"
        borderTopLeftRadius="0"
        borderTopRightRadius="md"
        borderBottomLeftRadius="md"
        borderBottomRightRadius="0"
      >
        {job.JobType.Name}
      </Badge>

      <Flex>
        <Center>
          <Center w="80px" h="80px">
            <Image width="68px" height="68px" alt={job.Company.Name} src={job.Company.Picture} />
          </Center>
        </Center>
        <Box>
          <NextLink href={`/job/${job.Id}`}>
            <Link fontSize="x-large" color="blue.400">
              {job.Title}
            </Link>
          </NextLink>
          <Text display="flex" alignItems="center">
            en&nbsp;
            <Icon as={FaBuilding} />
            <Text ml="1" mr="1" as="strong">
              {job.Company.Name}
            </Text>
            —
            <Icon ml="1" mr="1" as={FaMapMarkerAlt} /> {job.Location.Name}
            &nbsp;{getRemoteBadge()}
          </Text>
          <Text noOfLines={2} mt="1">
            {job.Description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
export default JobCard;
