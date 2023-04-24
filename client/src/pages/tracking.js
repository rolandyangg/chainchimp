import React, { useEffect, useState } from 'react';
import {
  Center,
  Card,
  CardBody,
  Box,
  Text,
  Flex,
  VStack,
  Button,
  HStack,
  Heading,
  Progress,
  Input,
  Divider,
  Tabs,
  TabList,
  Tab,
  option,
  TabPanels,
  TabPanel,
  FormLabel,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  FormControl,
  Select,
} from '@chakra-ui/react';

import { useParams } from "react-router-dom"; // This is so we can grab the ID

import { useAddress, useContract } from '@thirdweb-dev/react';

import { CONTRACT_ID } from '../constants.js';

/**
struct Transaction {
        uint id;
        address sender;
        address receiver;
        uint productID;
        uint price;
        string memo;
        uint timestamp;
    }
 */

function TransactionCard({id, sender, receiver, sender_role, reciever_role, price, memo, timestamp}) {
    return (
        <>
        <Card mx="10px" my="30px" overflow='hidden' variant='outline' maxW="90%" bgColor="blackAlpha.300" color="white">
            <CardBody mt="-7px">
                <Flex align="center" justify="space-between" w="100%">
                    <VStack align="left">
                        <Text>ID: {id}</Text>
                        <Text>Sender ({sender_role}): {id}</Text>
                        <Text>Receiver ({reciever_role}): {id}</Text>
                        <Text>Timestamp: {id}</Text>
                    </VStack>
                    <Box m="30px">
                    <Text>Memo: {memo}</Text>
                    </Box>
                </Flex>
            </CardBody>
        </Card>
        </>
    )
}

export default function Tracking() {
  const address = useAddress();
  const { isLoading, contract } = useContract(CONTRACT_ID);
  const [products, setProducts] = useState();
  
  const { id } = useParams(); // grab the product ID

  useEffect(() => {
    async function fetchData() {
      if(address && !isLoading) // logged in
      {
        // setProducts(await contract.call('getAllProducts', [address]));
        // setProducts([
        //   {name: "Laptop", id: 10, party: "jdsklfjsdlkfjsldkjf", stage: "Manufacturer"},
        //   {name: "water bottle", id: 1, party: "ur mom's party", stage: "Supplier"},
        // ])
      }
    }
  
    fetchData();
  }, [address, contract, isLoading]);

  return (
    <>
      <Center m={{base: "25px", md: "50px"}}>
            <VStack border="1px" p="30px" rounded={7} w="95%" maxW="1200px" minH="700px">

            {/* PRODUCT MAIN INFORMATION */}
                <Heading py="10px" fontSize="2xl">Product Information</Heading>
                <Box align="left">
                    <VStack align="left" p="20px" minW={{base: "400px", md: "700px"}}>
                        <Text fontSize="lg">Name: </Text>
                        <Text fontSize="lg">ID: {id} </Text>
                        <Text fontSize="lg">Quantity: </Text>
                        <Text fontSize="lg">Stage: </Text>
                        <Text fontSize="lg">Current Owner: </Text>
                        <Progress align="left" height="16px" color="white" w="100%" value={80}/>
                    </VStack>
                </Box>
                
            <Divider color="white" my="60px" w={{base: "400px", md: "700px"}}/>

            {/* PRODUCT HISTORY */}
            <Heading py="20px" fontSize="2xl">Transaction History</Heading>

            <TransactionCard id="100" sender="Joe" sender_role="Distributor" receiver="Will Smith <3" reciever_role="Consumer" price="1 million robux" memo="Hey silly willy! Nice to see you! Here's your wood that your ordered uwu" timestamp="April 20th 2023"/>

            </VStack>
        </Center>
    </>
  );
}
