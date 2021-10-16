import React, { FC } from "react";
import { Colaborator } from "@/types/Colaborator";
import { Badge, Box, Image } from "@chakra-ui/react";

type ColaboratorCardProps = {
  colaborator: Colaborator;
};

const ColaboratorCard: FC<ColaboratorCardProps> = ({ colaborator }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image width="100%" src={colaborator.avatar_url} alt={colaborator.login} />
      <Box p="6">
        <Box mt="1" fontWeight="bold" as="h1" lineHeight="tight" isTruncated textAlign="center">
          {colaborator.login.toUpperCase()}
        </Box>
        <Box textAlign="center">{colaborator.contributions} contribuciones</Box>
      </Box>
    </Box>
  );
};
export default ColaboratorCard;
