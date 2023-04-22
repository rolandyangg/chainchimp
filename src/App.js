import React from 'react';
import {
  ChakraProvider,
  Center,
  Box,
  Text,
  Flex,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
  HStack,
} from '@chakra-ui/react';
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>

      <Center Center justify="center">
        <Box maxW="1100px" w="100%" mx="25px" pt={{base: 0, sm: 0}}>
            <Flex align="center" justify="space-between" flexDir={{ base: "column", md: "row" }} p="20px">
                <Flex>
                    <Link href="/"><Heading fontSize="2xl">epic supply chain blockchain project</Heading></Link>
                </Flex>
                <HStack spacing={6} flexWrap="wrap" justify="center">
                    <Link href="/" _hover={{color: "white"}}><Text color="whiteAlpha.700" fontSize="xl" _hover={{color: "white"}}>home</Text></Link>
                    <Link href="/" _hover={{color: "white"}}><Text color="whiteAlpha.700" fontSize="xl" _hover={{color: "white"}}>dashboard</Text></Link>
                </HStack>
            </Flex>
        </Box>
      </Center>

      <Center justify="center" p={{base: "50px", mdd: "100px"}} backgroundColor="#131313">
        <Flex direction={{ base: "column", md: "row"}} justify="space-between" align="center" flexWarp="wrap" w="100%" maxW="800px">
          <VStack my="200px">
            <Heading>the future of supply chain management</Heading>
          </VStack>
          <VStack align="start" fontSize="xl" my="10px" flexWrap="nowrap">
            <Text>transparent and secure one block at a time 😎</Text>
          </VStack>
        </Flex>
      </Center>
    </ChakraProvider>
  );
}

export default App;
