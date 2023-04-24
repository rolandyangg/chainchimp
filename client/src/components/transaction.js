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
import { useAddress, useContract, useSDK } from '@thirdweb-dev/react';
import { CONTRACT_ID, STAGE, STAGE_TO_NUM } from '../constants';
import web3 from 'web3';

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
  const address = useAddress();
  const sdk = useSDK();
  const { isLoading, contract } = useContract(CONTRACT_ID);

  function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());

      sdk.wallet.transfer(data.receiver, data.price);
      contract.call("createTransaction", [address, data.receiver, data.productID, web3.utils.toWei(data.price, 'ether'), data.memo])
    }
  return (
    <>
                <Heading m="7" size="lg" textAlign="center">Make Transaction</Heading>
                
                <Divider/>
                <form onSubmit={handleSubmit}>
                    <FormControl py="2" minW="700px" isRequired>
                        <FormLabel>Recieving Address</FormLabel>
                        <Input name="receiver" isRequired />
                    </FormControl>
                    <FormControl py="2" isRequired>
                        <FormLabel>Product ID</FormLabel>
                        <Input name="productID" isRequired />
                    </FormControl>
                    <FormControl py="2" isRequired>
                        <FormLabel>Price (ETH)</FormLabel>
                        <Input name="price" isRequired />
                    </FormControl>
                    <FormControl py="2">
                        <FormLabel>Memo</FormLabel>
                        <Textarea name="memo" />
                    </FormControl>
                    <Button mt="4" colorScheme="blue" type="submit" size="md" w="full" loadingText="Logging In">Confirm Transaction</Button>
                </form>
                    {/* <Heading py="10px">Products</Heading> */}
    </>
  );
}
