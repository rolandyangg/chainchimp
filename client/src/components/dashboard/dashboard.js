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
import Footer from '../footer.js'
import Navbar from '../navbar.js'

export default function Dashboard() {
  return (
    <>

      {/** NAVBAR */}
      <Navbar/>

    {/** ISSUES/PROBLEMS WITH THE CURRENT SYSTEM */}

    {/** SOLUTION/HOW IT WORKS */}

    {/** FOOTER */}
    <Footer/>
    </>
  );
}
