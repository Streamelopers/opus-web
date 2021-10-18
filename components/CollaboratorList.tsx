import { Collaborator } from "@/types/Collaborator";
import { Box, Grid, GridItem } from "@chakra-ui/layout";
import React, { FC } from "react";
import CollaboratorCard from "./CollaboratorCard";

type CollaboratorListProps = {
  collaborators: Array<Collaborator>;
  title: string;
};

const CollaboratorList: FC<CollaboratorListProps> = ({ collaborators, title }) => {
  const renderCollaboratorCards = () => {
    const cards = collaborators.map((collaborator) => (
      <GridItem w="100%">
        <CollaboratorCard collaborator={collaborator} />
      </GridItem>
    ));

    return (
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {cards}
      </Grid>
    );
  };
  return (
    <Box mt="1em" mb="2em">
      <Box marginBottom="2em" marginTop="1em" as="h2" fontWeight="bold" fontSize="3xl" textAlign="center">
        <h1>{title}</h1>
      </Box>
      {renderCollaboratorCards()}
    </Box>
  );
};

export default CollaboratorList;
