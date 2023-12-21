import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Box maxW="sm" shadow="2xl" borderRadius="lg" overflow="hidden" bg="white">
      <Image objectFit="cover" src={imageSrc} alt="" borderRadius="lg" />
      <Box p={4}>
        <VStack>
          <Box width="100%">
            <Heading
              fontWeight="bold"
              as="h4"
              fontSize="l"
              lineHeight="tight"
              noOfLines={1}
              color="gray.900"
              textAlign={"left"}
            >
              {title}
            </Heading>
          </Box>
          <Box width="100%">
            <Text
              color="gray.600"
              fontSize="xs"
              noOfLines={[1, 2, 3]}
              textAlign={"left"}
              mt="1"
            >
              {description}
            </Text>
          </Box>

          <Box mt="1" width={"100%"}>
            <HStack spacing={2} width="100%">
              <Box color="gray.800" fontSize="xs">
                <Text fontWeight="600" textAlign={"left"}>
                  See more
                </Text>
              </Box>
              <Box color="gray.800">
                <a href={`/#${title.toLowerCase().trim()}`}>
                  <FontAwesomeIcon icon={faArrowRight} size="1x" />
                </a>
              </Box>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Card;
