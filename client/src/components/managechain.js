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
  return (
    <>
        <form>
        <HStack>
            <FormControl py="2">
            <FormLabel>Type</FormLabel>
            <Select>
                <option>Raw Materials</option>
                <option>Supplier</option>
                <option>Manufacturer</option>
                <option>Distributor</option>
                <option>Consumer</option>
            </Select>
            </FormControl>
            <FormControl>
            <FormLabel>Name</FormLabel>
            <Input />
            </FormControl>
            <FormControl>
            <FormLabel>Address</FormLabel>
            <Input />
            </FormControl>
            <FormControl>
            <FormLabel>Location</FormLabel>
            <Input />
            </FormControl>
        </HStack>
        <Button colorScheme="blue">Submit</Button>
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
