import React, { FC } from "react";
import { Collaborator } from "@/types/Collaborator";
import { Box, Image } from "@chakra-ui/react";
import styles from "./CollaboratorCard.module.css";

type CollaboratorCardProps = {
  collaborator: Collaborator;
};

const CollaboratorCard: FC<CollaboratorCardProps> = ({ collaborator }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image width="100%" src={collaborator.avatar_url} alt={collaborator.login} />
      <Box p="6">
        <Box mt="1" fontWeight="bold" as="h1" lineHeight="tight" isTruncated textAlign="center">
          <a className={styles["name-link"]} href={collaborator.html_url} target="_blank">
            {collaborator.login.toUpperCase()}
          </a>
        </Box>
        <Box textAlign="center">{collaborator.contributions} contribuciones</Box>
      </Box>
    </Box>
  );
};
export default CollaboratorCard;
