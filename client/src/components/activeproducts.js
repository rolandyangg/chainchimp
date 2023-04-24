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
import ProductCard from '../components/dashboardproduct.js'

// Panels
import { useAddress, useContract } from '@thirdweb-dev/react';

import { CONTRACT_ID } from '../constants.js';

export default function ActiveProducts() {
  const address = useAddress();
  const { isLoading, contract } = useContract(CONTRACT_ID);
  const [products, setProducts] = useState();

  useEffect(() => {
    async function fetchData() {
      if(address && !isLoading) // logged in
      {
        setProducts(await contract.call('getAllProducts', [address]));
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
        <Box justify="center" py="10px" fontSize="xl">
        <form>
            <HStack>
                <FormControl isRequired>
                <FormLabel>Product Name</FormLabel>
                <Input name="name" isRequired />
                </FormControl>
                <FormControl isRequired>
                <FormLabel>Starting Address</FormLabel>
                <Input name="address" isRequired />
                </FormControl>
                <FormControl isRequired>
                <FormLabel>Quantity</FormLabel>
                <Input name="quantity" isRequired />
                </FormControl>
            </HStack>
            <Button colorScheme="blue" type="submit">Submit</Button>
            </form>

            <Divider color="white" my="20px" w="800px"/>

        {/* <Text fontWeight="bold" fontSize="2xl">test</Text> */}
        {products && products.map(product => 
        {
            { console.log("mapping", product); }
            return <ProductCard name={product[2]} id={product[0]._hex} stage={product[1]} party={product[1]} progress="40"/>
        })}
            {/* <ProductCard name="Laptop" id="10" stage="Manufacturer" party="9123912931293123x1239123" progress="40"/>
            <ProductCard name="T-Shirts" id="13" stage="Consumer" party="20301203102xasod02" progress="100"/>
            <ProductCard name="Beds" id="3" stage="Supplier" party="23020302303013kkk" progress="60"/> */}
        </Box>
    </>
  );
}
