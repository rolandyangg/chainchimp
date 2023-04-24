import React from 'react';
import {
  Center,
  Card,
  CardBody,
  Box,
  Text,
  Flex,
  VStack,
  Button,
  Heading,
  Progress,
  Divider,
} from '@chakra-ui/react';
import Footer from '../components/footer.js'
import Navbar from '../components/navbar.js'

function ProductCard({name, id, stage, party, progress}) {
  return (<>
   <Card mx="10px" my="20px" overflow='hidden' variant='outline' maxW="90%" bgColor="blackAlpha.300" color="white">
            <CardBody mt="-7px">
            <Flex align="center" justify="space-between" w="100%">
                <VStack align="start" h="90px" w="80%">
                    
                    <Text>Name: {name} | ID: {id} | Party: {party} | Stage: {stage} </Text>
                    
                    <Progress height="16px" color="white" w="100%" value={progress}/>
                    
                </VStack>
                <Button variant='outline' mx="5px" my="5px" _hover={{ backgroundColor: "blue.800", borderColor: "blue.300" }}>View History</Button>
                </Flex>
            </CardBody>
        </Card></>)
}

export default function Dashboard() {
  return (
    <>

      {/** NAVBAR */}
      <Navbar/>

      <Center m={{base: "25px", md: "50px"}}>
                <VStack border="1px" p="10px" rounded={7} w="95%" maxW="1100px" minH="600px">
                    <Heading py="10px">Products</Heading>
                    <Divider/>
                    <Box justify="center" py="10px" fontSize="xl">
                        {/* <Text fontWeight="bold" fontSize="2xl">test</Text> */}
                        <ProductCard name="Laptop" id="10" stage="Manufacturer" party="9123912931293123x1239123" progress="40"/>
                        <ProductCard name="T-Shirts" id="13" stage="Consumer" party="20301203102xasod02" progress="100"/>
                        <ProductCard name="Beds" id="3" stage="Supplier" party="23020302303013kkk" progress="60"/>
                    </Box>
                </VStack>
            </Center>

      {/** FOOTER */}
      <Footer/>
    </>
  );
}
