import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  HStack,
  Input,
  Divider,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';
import ProductCard from '../components/dashboardproduct.js'

// Panels
import { useAddress, useContract } from '@thirdweb-dev/react';

import { CONTRACT_ID } from '../constants.js';

export default function ActiveProducts() {
  const address = useAddress();
  const { isLoading, contract } = useContract(CONTRACT_ID);
  const [products, setProducts] = useState();

  // var listener = contract.events.ListenToAll((ContractEvent<object> anyEvent) => Debug.Log("Event occured: " + anyEvent.data));

  // var listener = contract.events.listenToAllEvents((event) => {
  //   console.log("test");
  // });


  const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());
      contract.call("createProduct", [address, data.name, data.quantity]);
    }

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
  
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 1000);

  }, [address, contract, isLoading]);

  return (
    <>
        <Box justify="center" py="10px" fontSize="xl">
        <form onSubmit={handleSubmit} >
            <HStack>
                <FormControl isRequired>
                  <FormLabel>Product Name</FormLabel>
                  <Input name="name" isRequired />
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
            // [id, stage, name]
            return <ProductCard name={product[2]} id={product[0]._hex} stage={product[1]} party={product[1]} progress={product[1] * 25}/>
        })}
        </Box>
    </>
  );
}
