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
            <VStack border="1px" p="10px" rounded={7} w="95%" maxW="1200px" minH="700px">
                  
                <Text>{id}</Text>
            </VStack>
        </Center>
    </>
  );
}
