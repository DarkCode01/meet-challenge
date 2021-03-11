import React, { useState } from 'react';
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

import { github } from 'lib/services/api';
import { useRequest } from 'lib/hooks/useRequest';

export default function Home() {
  const [page, setPage] = useState(1);
  const [quantity, setQuantity] = useState(100);
  const { isLoading, response, error } = useRequest({
    action: github.getUsers,
    options: {
      page: page,
      per_page: quantity
    }
  });

  // handler quantity
  const handlerQuantity = v => setQuantity(v.target.value);

  return (
    <ChakraProvider theme={theme}>
      <Navbar title="test" />
      <Box textAlign="center" fontSize="xl">
        <Flex padding={[0, 0, 50, 50]}>
          <Box>
            <Heading>Todos los usuarios</Heading>
          </Box>
          <Spacer />
          <Filter handleChange={handlerQuantity} />
        </Flex>
        {/* <SimpleGrid columns={2}>
          
          <Box>
            <Filter />
          </Box>
        </SimpleGrid> */}
        
        <Grid minH="100vh" p={3}>
          <UserList users={response.data || []} />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
