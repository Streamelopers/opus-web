import React from "react";
import JobHeader from "@/components/JobDetails/JobHeader/JobHeader";
import JobInfo from "@/components/JobDetails/JobInfo/JobInfo";
import { Badge, Box, Button, Divider, Text, Icon, Flex, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import NextLink from "next/link";

import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import Image from "next/image";

const JobDetails = () => {
  const someHTML = `
    <p>You will work directly with the founder of a young company called Polymer Search and work on some exciting
     search innovation. I have been a Computer science engineer myself for the last 20+ years (ex-Google).
      I am looking for an experienced full stack developer. The focus is on data analytics and
       management via a SaaS webapp via a fairly involved UX. Some of the skills I am looking for are:</p>
      <br>
      <h1>Hello</h1>
      <ul>
        <li>5+ years experience in performant Javascript for frontend and backend.</li>

        <li>2+ year Vue.js experience (or another Reactive framework like React and willing to pickup Vue quickly)</li>

        <li>Preferable: <a href="#">Node.js</a> experience: Writing performant web applications, working with popular frameworks.</li>

        <li>Comfortable with HTML/CSS and CSS frameworks like Bootstrap</li>

        <li>Comfortable using Chrome or Firefox Dev Tools to debug and instrument web applications</li>

        <li>Working with databases : Postgres/Redis/Mongodb</li>

        <li>Working with different web architectures and technologies (Load balancing, performance instrumentation, logging, queuing technologies, databases)</li>
      </ul>
  `;

  return (
    <>
      <JobHeader />
      <JobInfo />

      <Box mt="5" className="job-description">
        <Text fontWeight="600" fontSize="2xl">
          Job description
        </Text>
        <Divider />
        <Box>
          <div dangerouslySetInnerHTML={{ __html: someHTML }} />
        </Box>
      </Box>

      <Box>
        <Text fontWeight="600" fontSize="xl">
          Skills
        </Text>
        <Divider />
        <Box mt="1">
          <Badge colorScheme="blue" padding="1" mr="2" borderRadius="10px">
            Vue
          </Badge>
          <Badge colorScheme="blue" padding="1" mr="2" borderRadius="10px">
            React
          </Badge>
          <Badge colorScheme="blue" padding="1" mr="2" borderRadius="10px">
            Nuxt
          </Badge>
        </Box>
      </Box>

      <Box bg="gray.100" borderRadius="10px" p="5" mt="5">
        <Text fontWeight="600" fontSize="2xl">
          How to apply
        </Text>
        <Text>
          Find out more about us on our Careers page and submit your application through the job opening posted there:
          https://careers.jibblegroup.com/p/dd9322f4001f01-senior-front-end-developer
        </Text>

        <Button colorScheme="teal" size="md" mt="3">
          Apply now!
        </Button>
      </Box>

      <Box mt="5">
        <Text>Do you think this job matches someone? Share!</Text>
        <Box>
          <FacebookShareButton quote="abc" url="http://google.com" hashtag="#trabajo" style={{ marginRight: "10px" }}>
            <Badge variant="outline" colorScheme="facebook">
              <Flex alignItems="center">
                <Icon as={FaFacebook} />
                &nbsp;Facebook
              </Flex>
            </Badge>
          </FacebookShareButton>

          <TwitterShareButton
            title="this is the title"
            url="http://google.com"
            via="opus"
            style={{ marginRight: "10px" }}
          >
            <Badge variant="outline" colorScheme="twitter">
              <Flex alignItems="center">
                <Icon as={FaTwitter} />
                &nbsp;Twitter
              </Flex>
            </Badge>
          </TwitterShareButton>

          <LinkedinShareButton
            title="this is the title"
            summary="some summary"
            source="NYT"
            url="http://google.com"
            style={{ marginRight: "10px" }}
          >
            <Badge variant="outline" colorScheme="linkedin">
              <Flex alignItems="center">
                <Icon as={FaLinkedinIn} />
                &nbsp;LinkedIn
              </Flex>
            </Badge>
          </LinkedinShareButton>

          <WhatsappShareButton title="this is the title" url="http://google.com">
            <Badge variant="outline" colorScheme="whatsapp">
              <Flex alignItems="center">
                <Icon as={FaWhatsapp} />
                &nbsp;WhatsApp
              </Flex>
            </Badge>
          </WhatsappShareButton>
        </Box>
      </Box>

      <Box mt="5">
        <Text fontSize="2xl" fontWeight="600">
          Looking for more full-time jobs?
        </Text>
        <Divider />

        <Box
          mt="5"
          padding="5px 10px"
          borderRadius="10px"
          _hover={{
            bg: "gray.50"
          }}
        >
          <Flex alignItems="center">
            <Box p="2">
              <Image
                src="https://vuejobs.com/storage/avatars/yBYKiaPkbln6yDt4z0kA4sUikiCsq5JQRYc5PU0y.png"
                width="50"
                height="50"
              />
            </Box>
            <Box flex="1">
              <Text>
                <NextLink href={`/job/123`}>
                  <Link color="blue.400">Senior Frontend Developer (VueJS)</Link>
                </NextLink>
              </Text>
              <Text>
                <Text as="span" color="gray.400">
                  at
                </Text>
                <Text as="strong"> CyberCoder </Text>
                <Text as="span">Washington, DC, USA - Washington, DC, USA</Text>
              </Text>
            </Box>
            <Box>
              <Text>1 weak ago</Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box
        padding="5px 10px"
        borderRadius="10px"
        _hover={{
          bg: "gray.50"
        }}
      >
        <Flex alignItems="center">
          <Box p="2">
            <Image
              src="https://vuejobs.com/storage/avatars/yBYKiaPkbln6yDt4z0kA4sUikiCsq5JQRYc5PU0y.png"
              width="50"
              height="50"
            />
          </Box>
          <Box flex="1">
            <Text>
              <NextLink href={`/job/123`}>
                <Link color="blue.400">Senior Frontend Developer (VueJS)</Link>
              </NextLink>
            </Text>
            <Text>
              <Text as="span" color="gray.400">
                at
              </Text>
              <Text as="strong"> CyberCoder </Text>
              <Text as="span">Washington, DC, USA - Washington, DC, USA</Text>
            </Text>
          </Box>
          <Box>
            <Text>1 weak ago</Text>
          </Box>
        </Flex>
      </Box>

      <Box
        padding="5px 10px"
        borderRadius="10px"
        _hover={{
          bg: "gray.50"
        }}
      >
        <Flex alignItems="center">
          <Box p="2">
            <Image
              src="https://vuejobs.com/storage/avatars/yBYKiaPkbln6yDt4z0kA4sUikiCsq5JQRYc5PU0y.png"
              width="50"
              height="50"
            />
          </Box>
          <Box flex="1">
            <Text>
              <NextLink href={`/job/123`}>
                <Link color="blue.400">Senior Frontend Developer (VueJS)</Link>
              </NextLink>
            </Text>
            <Text>
              <Text as="span" color="gray.400">
                at
              </Text>
              <Text as="strong"> CyberCoder </Text>
              <Text as="span">Washington, DC, USA - Washington, DC, USA</Text>
            </Text>
          </Box>
          <Box>
            <Text>1 weak ago</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default JobDetails;
