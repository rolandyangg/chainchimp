import React from 'react';
import {
  ChakraProvider,
  Center,
  Box,
  Text,
  Flex,
  Link,
  VStack,
  Code,
  Image,
  Grid,
  Button,
  Stack,
  Heading,
  Icon,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
    {/** FOOTER */}
    <Center justify="center" p="50px" color="whiteAlpha.700">
            <VStack>
                <Text>📦 LAHacks Project © 2023 📦</Text>
                <Link href="https://github.com/rolandyangg/supply-chain-blockchain" isExternal><Icon as={FaGithub}/></Link>
            </VStack>
      </Center>
    </>
  );
}
