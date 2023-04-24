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
  Textarea,
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

/**
 * 
 * @returns struct Transaction {
        uint id;
        address sender;
        address receiver;
        uint productID;
        uint price;
        string memo;
        uint timestamp;
    }
 */

export default function Transaction() {
  return (
    <>
                <Heading m="7" size="lg" textAlign="center">Make Transaction</Heading>
                
                <Divider/>
                <form>
                    <FormControl py="2" minW="700px">
                        <FormLabel>Recieving Address</FormLabel>
                        <Input/>
                    </FormControl>
                    <FormControl py="2">
                        <FormLabel>Product ID</FormLabel>
                        <Input />
                    </FormControl>
                    <FormControl py="2">
                        <FormLabel>Price</FormLabel>
                        <Input />
                    </FormControl>
                    <FormControl py="2">
                        <FormLabel>Memo</FormLabel>
                        <Textarea />
                    </FormControl>
                    <Button mt="4" colorScheme="blue" type="submit" size="md" w="full" loadingText="Logging In">Confirm Transaction</Button>
                </form>
                    {/* <Heading py="10px">Products</Heading> */}
    </>
  );
}
