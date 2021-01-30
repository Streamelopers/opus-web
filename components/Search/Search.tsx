import { Input, Icon, InputGroup, Button, Flex, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Box mt="2">
      <InputGroup size="md">
        <Input pr="4.5rem" type="text" placeholder="Keywords, location, job type..." />
        <Button ml="2" outline="0 !important" colorScheme="blue" isLoading={isLoading} onClick={handleSearch}>
          <Flex alignItems="center">
            <Icon as={FaSearch} mr="1" />
            Search!
          </Flex>
        </Button>
      </InputGroup>
    </Box>
  );
};

export default Search;
