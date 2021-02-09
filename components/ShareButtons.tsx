import { Badge, Box, Flex, Icon, Text } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";

type ShareButtonsProps = {
  title: string;
  description: string;
};

const ShareButtons: FC<ShareButtonsProps> = ({ title, description }: ShareButtonsProps) => {
  const [fullPath, setFullPath] = useState("");

  useEffect(() => {
    setFullPath(window.location.href);
  }, []);

  return (
    <Box mt="5">
      <Text>¿Crees que este trabajo encaja con alguien? ¡Comparte!</Text>
      <Box>
        <FacebookShareButton quote={title} url={fullPath} hashtag="#trabajo" style={{ marginRight: "10px" }}>
          <Badge variant="outline" colorScheme="facebook">
            <Flex alignItems="center">
              <Icon as={FaFacebook} />
              &nbsp;Facebook
            </Flex>
          </Badge>
        </FacebookShareButton>

        <TwitterShareButton
          title={title}
          url={fullPath}
          via="opus"
          hashtags={["trabajo"]}
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
          title={title}
          summary={description}
          source="Opus"
          url={fullPath}
          style={{ marginRight: "10px" }}
        >
          <Badge variant="outline" colorScheme="linkedin">
            <Flex alignItems="center">
              <Icon as={FaLinkedinIn} />
              &nbsp;LinkedIn
            </Flex>
          </Badge>
        </LinkedinShareButton>

        <WhatsappShareButton title="this is the title" url={fullPath}>
          <Badge variant="outline" colorScheme="whatsapp">
            <Flex alignItems="center">
              <Icon as={FaWhatsapp} />
              &nbsp;WhatsApp
            </Flex>
          </Badge>
        </WhatsappShareButton>
      </Box>
    </Box>
  );
};

export default ShareButtons;
