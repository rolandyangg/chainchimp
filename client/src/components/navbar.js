import React, { useEffect } from 'react';
import {
  Button,
  Center,
  Box,
  Text,
  Flex,
  Link,
  Heading,
  HStack,
} from '@chakra-ui/react';
import { ConnectWallet, useAddress, useContract, useContractWrite } from '@thirdweb-dev/react';

export default function Navbar() {
  const address = useAddress();

  useEffect(() => {
    console.log(address);
    if(address) // logged in
    {
      // const 
      // check if is valid
    }
  }, [address])


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
                    {/* {address ? <ConnectWallet />} */}
                    <ConnectWallet />
                    {/* // <Button onclick={() => login()} variant='outline' mx="5px" my="5px" _hover={{ backgroundColor: "blue.800", borderColor: "blue.300" }}>
                    //   {isLoading ? "Loading..." : "Sign in"}
                    // </Button> */}
                </HStack>
            </Flex>
        </Box>
      </Center>
    </>
  );
}
