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
import Repos from 'components/organisms/User/Repos';
import Details from 'components/organisms/User/Details';

import { github } from 'lib/services/api';
import { useRequest } from 'lib/hooks/useRequest';
import { useParams } from 'react-router-dom';

export default function User() {
  const { username } = useParams();
  const userRequest = useRequest({
    action: github.getUser,
    options: { username }
  });
  const reposRequest = useRequest({
    action: github.getUserRepositories,
    options: { username }
  });
  
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
            <Details user={userRequest.response.data || {}} />
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
           {/* / <Filter /\\> */}
            <Repos repos={reposRequest.response.data || []} />
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
