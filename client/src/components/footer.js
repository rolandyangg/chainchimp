import React from 'react';
import {
  Center,
  Text,
  Link,
  VStack,
  Icon,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
    <Center justify="center" p="50px" color="whiteAlpha.700">
            <VStack>
                <Text>📦 LAHacks Project © 2023 📦</Text>
                <Link href="https://github.com/rolandyangg/supply-chain-blockchain" isExternal><Icon as={FaGithub}/></Link>
            </VStack>
      </Center>
    </>
  );
}
