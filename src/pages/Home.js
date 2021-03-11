import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Heading
} from '@chakra-ui/react';
import UserList from 'components/organisms/User/UserList';
import Navbar from 'components/organisms/Layout/Navbar';

function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar title="test" />
      <Box textAlign="center" fontSize="xl">
        <Heading>All users</Heading>
        <Grid minH="100vh" p={3}>
          <UserList />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default Home;
