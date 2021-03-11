import React from 'react';
// import { useParams } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  GridItem
} from '@chakra-ui/react';
import Navbar from 'components/organisms/Layout/Navbar';
import UserList from 'components/organisms/User/UserList';
import Details from 'components/organisms/User/Details';

export default function User() {
  // const { username } = useParams();
  
  return (
    <ChakraProvider theme={theme}>
      <Navbar title="test" />
      <Box textAlign="center" fontSize="xl">
        {/* <Heading>All users</Heading> */}
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
          // minH="100vh"
          p={3}
        >
          <GridItem colSpan={1} rowSpan={2}>
            <Details />
          </GridItem>
          {/* <GridItem
            colSpan={4}
            // maxH="100vh"
          >
            <Filter />
          </GridItem> */}
          <GridItem
            colSpan={4}
            // maxH="100vh"
          >
           {/* / <Filter /> */}
            <UserList />
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
