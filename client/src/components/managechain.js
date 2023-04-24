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
import { useAddress, useContract } from '@thirdweb-dev/react';
import { CONTRACT_ID, STAGE, STAGE_TO_NUM } from '../constants';

function ChainTable({party_name, party_enum}) {
    return (
        <>
            <TableContainer border="1px" rounded={7}>
                <Text p="10px">{party_name}</Text>
                <Table variant='simple'>
                <Thead>
                <Tr>
                    <Th>Address</Th>
                    <Th>Name</Th>
                    <Th>Location</Th>
                </Tr>
                </Thead>
                <Tbody>
                    <Td>S123012310312031203</Td>
                    <Td>Joe's Wood Shack</Td>
                    <Td>UCLA</Td>
                </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default function ManageChain() {
    const address = useAddress();
    const { isLoading, contract } = useContract(CONTRACT_ID);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        contract.call("createParty", [data.name, data.location, STAGE_TO_NUM.get(data.type), address])
      }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <HStack>
                <FormControl py="2" isRequired>
                <FormLabel>Type</FormLabel>
                <Select name="type" isRequired>
                    <option>Raw Materials</option>
                    <option>Supplier</option>
                    <option>Manufacturer</option>
                    <option>Distributor</option>
                    <option>Consumer</option>
                </Select>
                </FormControl>
                <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input name="name" isRequired />
                </FormControl>
                <FormControl isRequired>
                <FormLabel>Address</FormLabel>
                <Input name="address" isRequired />
                </FormControl>
                <FormControl isRequired>
                <FormLabel>Location</FormLabel>
                <Input name="location" isRequired />
                </FormControl>
            </HStack>
            <Button colorScheme="blue" type="submit">Submit</Button>
            </form>


        <Divider color="white" my="10px" w="800px"/>

        <ChainTable party_name="Raw Materials"/>

        <Divider color="white" my="10px" w="800px"/>

        <ChainTable party_name="Supplier"/>

        <Divider color="white" my="10px" w="800px"/>

        <ChainTable party_name="Manufacturer"/>

        <Divider color="white" my="10px" w="800px"/>

        <ChainTable party_name="Distributor"/>

        <Divider color="white" my="10px" w="800px"/>

        <ChainTable party_name="Consumer"/>
    </>
  );
}
