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
  Button,
  Stack,
  Heading,
  Icon,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa'
import Footer from '../footer.js'
import Navbar from '../navbar.js'

export default function Home() {
  return (
      <>
      {/** NAVBAR */}
      <Navbar/>

      {/** HERO */}
      <Center justify="center" p={{base: "50px", mdd: "100px"}} backgroundColor="#131313" bgImage="linear-gradient(45deg, rgba(0, 0, 0, 0.6) 0%, rgba(60, 60, 60, 0) 100%), url('SCM-HRM.png')" position="block" backgroundSize="cover" >
        <Flex direction={{ base: "column", md: "row"}} justify="space-between" align="center" flexWarp="wrap" w="100%" maxW="800px">
          <VStack my="200px">
            <Heading>The Future of Supply Chain Management</Heading>
            <Text fontSize="xl">Using blockchain to keep your chain transparent, safe, and efficient</Text>
          </VStack>
          <VStack align="start" fontSize="xl" my="10px" flexWrap="nowrap">
              <Center mx="20px" my="10px">
                  <Image alt='Roland Yang' src="supplychainlogo2.png" borderRadius="lg" maxW="325px"/>
              </Center>
          </VStack>
        </Flex>
      </Center>

    {/** ISSUES/PROBLEMS WITH THE CURRENT SYSTEM */}

    {/** SOLUTION/HOW IT WORKS */}

    {/** FOOTER */}
    <Footer/>
      </>
  );
}