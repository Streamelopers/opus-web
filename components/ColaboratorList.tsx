import { Colaborator } from "@/types/Colaborator";
import { Box, Grid, GridItem } from "@chakra-ui/layout";
import React, { FC } from "react";
import ColaboratorCard from "./ColaboratorCard";

type ColaboratorListProps = {
  colaborators: Array<Colaborator>;
  title: string;
};

const ColaboratorList: FC<ColaboratorListProps> = ({ colaborators, title }) => {
  const renderColaboratorCards = () => {
    const cards = colaborators.map((colaborator) => (
      <GridItem w="100%">
        <ColaboratorCard colaborator={colaborator} />
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
      {renderColaboratorCards()}
    </Box>
  );
};

export default ColaboratorList;
