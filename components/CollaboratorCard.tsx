import React, { FC } from "react";
import { Collaborator } from "@/types/Collaborator";
import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";

type CollaboratorCardProps = {
  collaborator: Collaborator;
};

const CollaboratorCard: FC<CollaboratorCardProps> = ({ collaborator }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image width="100%" src={collaborator.avatar_url} alt={collaborator.login} />
      <Flex direction="column" alignItems="center" p="6">
        <Heading size="sm" fontWeight="bold">
          <Link
            _hover={{
              color: "#63B3ED",
              transition: ".3s"
            }}
            isExternal
            href={collaborator.html_url}
          >
            {collaborator.login.toUpperCase()}
          </Link>
        </Heading>
        <Box>{collaborator.contributions} contribuciones</Box>
      </Flex>
    </Box>
  );
};
export default CollaboratorCard;
