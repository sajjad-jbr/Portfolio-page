import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="white" color="black" align="start" borderRadius='md'>
      <Image
        w="100%"
        objectFit='cover'
        borderRadius='md'
        src={imageSrc}
        alt={title}
      />
      <Heading mt={2} px={2} as="h3" size="md">{title}</Heading>
      <Text mt={2} px={2} color="gray.700">{description}</Text>
      <HStack px={2} pb={3}>
        <Text>See More</Text>
        <FontAwesomeIcon icon={ faArrowRight }/>
      </HStack>
    </VStack>
  );
};

export default Card;
