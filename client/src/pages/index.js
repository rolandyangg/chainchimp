import React from 'react';
import {
  Center,
  Text,
  Flex,
  VStack,
  Image,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react';
import Footer from '../components/footer.js'
import Navbar from '../components/navbar.js'
import { Web3Button } from '@thirdweb-dev/react';


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
                  <Image src="supplychainlogo2.png" borderRadius="lg" maxW="325px"/>
              </Center>
          </VStack>
        </Flex>
      </Center>

    {/** TRACKER */}
    <Center justify="center" p={{base: "50px", mdd: "100px"}} backgroundColor="#131313" position="block" >
        <Flex direction={{ base: "column", md: "row"}} justify="space-between" align="center" flexWarp="wrap" w="100%" maxW="800px">
          <VStack align="start" fontSize="xl" my="10px" flexWrap="nowrap">
            <form>
                <FormControl py="2" minW="400px">
                    <FormLabel>ID</FormLabel>
                    <Input/>
                </FormControl>
                <Button mt="4" colorScheme="blue" size="md" w="full" loadingText="Logging In">View History</Button>
              </form>
          </VStack>
          <VStack my="150px">
            <Heading>Track Your Product</Heading>
            <Text fontSize="xl">Enter your product ID to open its history</Text>
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