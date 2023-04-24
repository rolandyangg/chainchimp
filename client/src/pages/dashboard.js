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
import Footer from '../components/footer.js'
import Navbar from '../components/navbar.js'
import ProductCard from '../components/dashboardproduct.js'

// Panels
import ManageChain from '../components/managechain.js'
import Transaction from '../components/transaction.js'

export default function Dashboard() {
  return (
    <>
      <Navbar/>

      <Center m={{base: "25px", md: "50px"}}>
                <VStack border="1px" p="10px" rounded={7} w="95%" maxW="1200px" minH="700px">
                  <Tabs align="center" minW="1000px">
                    <TabList isFitted mb='1em'>
                      <Tab>Active Products</Tab>
                      <Tab>Manage My Supply Chain</Tab>
                      <Tab>Make Transaction</Tab>
                    </TabList>
                    <Divider/>
                    <TabPanels>
                      <TabPanel>
                        {/* Active Products */}
                        <Box justify="center" py="10px" fontSize="xl">
                        {/* <Text fontWeight="bold" fontSize="2xl">test</Text> */}
                          <ProductCard name="Laptop" id="10" stage="Manufacturer" party="9123912931293123x1239123" progress="40"/>
                          <ProductCard name="T-Shirts" id="13" stage="Consumer" party="20301203102xasod02" progress="100"/>
                          <ProductCard name="Beds" id="3" stage="Supplier" party="23020302303013kkk" progress="60"/>
                        </Box>
                      </TabPanel>
                      <TabPanel>
                        {/* Manage My Supply Chain */}
                        <ManageChain/>

                      </TabPanel>
                      <TabPanel>
                        {/* Track Product History */}
                        <Transaction/>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>

                    {/* <Heading py="10px">Products</Heading> */}
                    
                </VStack>


            </Center>
      <Footer/>
    </>
  );
}
