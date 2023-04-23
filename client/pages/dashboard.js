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
  Image,
  Grid,
  Heading,
  Icon,
  HStack,
} from '@chakra-ui/react';
import theme from './theme'
import { FaGithub } from 'react-icons/fa'

function Dashboard() {
  return (
    <ChakraProvider theme={theme}>

      {/** NAVBAR */}
      <Center Center justify="center">
        <Box maxW="1100px" w="100%" mx="25px" pt={{base: 0, sm: 0}}>
            <Flex align="center" justify="space-between" flexDir={{ base: "column", md: "row" }} p="20px">
                <Flex>
                    <Link href="/"><Heading fontSize="2xl">epic supply chain blockchain project</Heading></Link>
                </Flex>
                <HStack spacing={6} flexWrap="wrap" justify="center">
                    <Link href="/" _hover={{color: "white"}}><Text color="whiteAlpha.700" fontSize="xl" _hover={{color: "white"}}>home</Text></Link>
                    <Link href="/Dashboard" _hover={{color: "white"}}><Text color="whiteAlpha.700" fontSize="xl" _hover={{color: "white"}}>dashboard</Text></Link>
                </HStack>
            </Flex>
        </Box>
      </Center>

    {/** FOOTER */}
    <Center justify="center" p="50px" color="whiteAlpha.700">
            <VStack>
                <Text>📦 LAHacks Project © 2023 📦</Text>
                <Link href="https://github.com/rolandyangg/supply-chain-blockchain" isExternal><Icon as={FaGithub}/></Link>
            </VStack>
      </Center>
    </ChakraProvider>
  );
}

export default Dashboard;