import React, { useEffect, useState } from 'react';
import {
  Center,
  Card,
  CardBody,
  Box,
  Text,
  Flex,
  VStack,
  Link,
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

import { CONTRACT_ID, NUM_TO_STAGE } from '../constants.js';

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
                        <Text>Sender ({sender_role}): {sender}</Text>
                        <Text>Receiver ({reciever_role}): {receiver}</Text>
                        <Text>Timestamp: {timestamp}</Text>
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
  const [product, setProduct] = useState();
  const [transactionHistory, setTransactionHistory] = useState();
  
  const { id } = useParams(); // grab the product ID

  useEffect(() => {
    async function fetchData() {
      if(address && !isLoading) // logged in
      {
        setTransactionHistory(await contract.call('getTransactionHistory', [id]));
      }
    }
  
    fetchData();
  }, [address, contract, isLoading]);

  useEffect(() => {
    async function fetchData() {
      if(address && !isLoading) // logged in
      {
        setProduct(await contract.call('getProduct', [id]));
      }
    }
  
    fetchData();
  }, [address, contract, isLoading]);

  useEffect(() => {
    console.log(transactionHistory)
  }, [transactionHistory])


  useEffect(() => {
    console.log(product)
  }, [product])

  return (
    <>
      <Center m={{base: "25px", md: "50px"}}>
            <VStack border="1px" p="30px" rounded={7} w="95%" maxW="1200px" minH="700px">

            {/* PRODUCT MAIN INFORMATION */}
                <Heading py="10px" fontSize="2xl">Product Information</Heading>
            {product &&
              <div>
                {product[2] ? 
                  <Box align="left">
                      <VStack align="left" p="20px" minW={{base: "400px", md: "700px"}}>
                          <Text fontSize="lg">Name: {product[2]} </Text>
                          <Text fontSize="lg">ID: {id} </Text>
                          <Text fontSize="lg">Quantity: {product[3]._hex} </Text>
                          <Text fontSize="lg">Stage: {NUM_TO_STAGE.get(product[1])} </Text>
                          <Text fontSize="lg">Current Owner: <Link isExternal href={"https://sepolia.etherscan.io/address/" + product[5].toString()}>{product[6] + " (" + product[5] + ")"}</Link></Text>
                          <Progress align="left" height="16px" color="white" w="100%" value={(100*product[1])/5}/>
                      </VStack>
                  </Box>
                  : <div> invalid product id </div>
                }
              </div>
            }
                
            <Divider color="white" my="60px" w={{base: "400px", md: "700px"}}/>

            {/* PRODUCT HISTORY */}
            <Heading py="20px" fontSize="2xl">Transaction History</Heading>

            {transactionHistory && 
              <div>
                {
                  (transactionHistory[0]) ? (
                    transactionHistory.map(history =>
                          {
                            return <TransactionCard id={history[0]._hex} sender={history.sendername + " (" + history.sender + ")"}
                            sender_role={NUM_TO_STAGE.get(history.senderrole)} receiver={history.receivername + " (" + history.receiver + ")"} reciever_role={NUM_TO_STAGE.get(history[10])} price={history.price} 
                            memo={history.memo} timestamp={history.timestamp._hex}/>
                          })
                    // <TransactionCard id={id} sender={transactionHistory[0].sender} 
                    //                   sender_role={NUM_TO_STAGE.get(product[1]-1)} 
                    //                   receiver={transactionHistory[0].receiver} 
                    //                   reciever_role={NUM_TO_STAGE.get(product[1])} 
                    //                   price={transactionHistory[0].price}
                    //                   memo={transactionHistory[0].memo}
                    //                   timestamp={transactionHistory[0].timestamp._hex}
                    //                   />
                  )
                  // <>
                  //     transactionHistory.map(history =>
                  //     {
                  //       return <TransactionCard id={history.id} sender={history.sender}
                  //       sender_role="" reciever={history.reciever} reciever_role="" price={history.price} 
                  //       memo={history.memo} timestamp={history.timestamp._hex}/>
                  //     })
                  //   </>
                    
                    : <div> no valid transactions </div>
                }
              </div>
            }

            </VStack>
        </Center>
    </>
  );
}
