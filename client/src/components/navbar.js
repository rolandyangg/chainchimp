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

const CONTRACT_ID = '0xBFdd19b0f4bd2DC8e8AA161CC43F1c8e5e00f3b9';

export default function Navbar() {
  const address = useAddress();
  const { isLoading, contract } = useContract(process.env.CONTRACT_ID);

  useEffect(() => {
    async function fetchData() {
      // console.log(address, isLoading);
      if(address && !isLoading) // logged in
      {
        const isNewParty = await contract.call('isNewParty', [address])
      }
    }
  
    fetchData();
  }, [address, contract, isLoading]);


  // useEffect(async () => {
  //   console.log(address, isLoading);
  //   if(address && !isLoading) // logged in
  //   {
  //     const isNewParty = await contract.call('isNewParty', [address])
  //     console.log(isNewParty);
  //     // const 
  //     // check if is valid
  //   }
  // }, [address, contract])


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
