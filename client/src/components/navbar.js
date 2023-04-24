import React from 'react';
import {
  Center,
  Box,
  Text,
  Flex,
  Link,
  Heading,
  HStack,
} from '@chakra-ui/react';

export default function Navbar() {
  return (
    <>
      <Center Center justify="center">
        <Box maxW="1100px" w="100%" mx="25px" pt={{base: 0, sm: 0}}>
            <Flex align="center" justify="space-between" flexDir={{ base: "column", md: "row" }} p="20px">
                <Flex>
                    <Link href="/"><Heading fontSize="2xl">ChainChimp</Heading></Link>
                </Flex>
                <HStack spacing={6} flexWrap="wrap" justify="center">
                    <Link href="/" _hover={{color: "white"}}><Text color="whiteAlpha.700" fontSize="xl" _hover={{color: "white"}}>Home</Text></Link>
                    <Link href="/Dashboard" _hover={{color: "white"}}><Text color="whiteAlpha.700" fontSize="xl" _hover={{color: "white"}}>Dashboard</Text></Link>
                </HStack>
            </Flex>
        </Box>
      </Center>
    </>
  );
}
