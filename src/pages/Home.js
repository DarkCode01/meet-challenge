import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Heading,
  Flex,
  Spacer
} from '@chakra-ui/react';
import UserList from 'components/organisms/User/UserList';
import Navbar from 'components/organisms/Layout/Navbar';
import Filter from 'components/organisms/UI/Form/Filter';

function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar title="test" />
      <Box textAlign="center" fontSize="xl">
        <Flex padding={[0, 0, 50, 50]}>
          <Box>
            <Heading>Todos los usuarios</Heading>
          </Box>
          <Spacer />
          <Filter />
        </Flex>
        {/* <SimpleGrid columns={2}>
          
          <Box>
            <Filter />
          </Box>
        </SimpleGrid> */}
        
        <Grid minH="100vh" p={3}>
          <UserList />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default Home;
