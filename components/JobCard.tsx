import { Badge, Box, Center, Flex, Icon, Link as Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React, { FC, useState } from "react";
import { FaBuilding, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import { Job } from "@/types/Job";
import { formatDate, timeago } from "@/utils/utils";
import RemoteBadge from "./RemoteBadge";

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
            <Image width="68px" height="68px" alt={job.Company.Name} src={job.Company.Picture} loading="lazy" />
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
            <Box as="span" mr="1">
              {job.IsRemote || job.IsRemoteOnly ? "," : ""}
            </Box>
            <RemoteBadge isRemote={job.IsRemote} isRemoteOnly={job.IsRemoteOnly} />
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
