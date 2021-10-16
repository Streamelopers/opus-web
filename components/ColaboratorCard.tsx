import React, { FC } from "react";
import { Colaborator } from "@/types/Colaborator";
import { Box, Image } from "@chakra-ui/react";
import styles from "./ColaboratorCard.module.css";

type ColaboratorCardProps = {
  colaborator: Colaborator;
};

const ColaboratorCard: FC<ColaboratorCardProps> = ({ colaborator }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image width="100%" src={colaborator.avatar_url} alt={colaborator.login} />
      <Box p="6">
        <Box mt="1" fontWeight="bold" as="h1" lineHeight="tight" isTruncated textAlign="center">
          <a className={styles["name-link"]} href={colaborator.html_url} target="_blank">
            {colaborator.login.toUpperCase()}
          </a>
        </Box>
        <Box textAlign="center">{colaborator.contributions} contribuciones</Box>
      </Box>
    </Box>
  );
};
export default ColaboratorCard;
