import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  GridItem,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import Navbar from 'components/organisms/Layout/Navbar';
import Repos from 'components/organisms/User/Repos';
import Details from 'components/organisms/User/Details';
import ErrorNotificaiton from 'components/organisms/UI/ErrorNotificaiton';

import { github } from 'lib/services/api';
import { useRequest } from 'lib/hooks/useRequest';
import { useFocusError } from 'lib/hooks/useFocusError';
import { useParams } from 'react-router-dom';
import { useIfinityScroll } from 'lib/hooks/useInfinityScroll';

export default function User() {
  const { username } = useParams();
  const [page, setPage] = useState(1);

  // rquest and hooks
  const { isBottom, setIsBottom } = useIfinityScroll();
  const userRequest = useRequest({
    action: github.getUser,
    options: { username },
  });
  const reposRequest = useRequest({
    action: github.getUserRepositories,
    options: {
      username,
      page,
      defaultData: []
    },
  });

  useFocusError('error-notifiaciton', [userRequest.error, reposRequest.error]);

  useEffect(() => {
    if (isBottom === true) {
      reposRequest.setConcat(true);
      setPage(prev => prev + 1);
      setIsBottom(false);
    }

    // eslint-disable-next-line
  }, [isBottom]);

  return (
    <ChakraProvider theme={theme}>
      <Navbar title="Hub Clone" />

      <ErrorNotificaiton
        isOpen={userRequest.error || reposRequest.error}
        description={userRequest.error || reposRequest.error}
        onClose={() => {
          if (userRequest.error) userRequest.toggleError(null);
          if (reposRequest.error) reposRequest.toggleError(null);
        }}
      />

      <Box textAlign="center" fontSize="xl">
        <Box>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">@{ username }</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
          p={3}
        >
          <GridItem colSpan={1} rowSpan={2}>
            <Details
              isLoading={userRequest.isLoading}
              user={userRequest.data || {}}
            />
          </GridItem>
          <GridItem
            colSpan={4}
          >
            <Repos
              isLoading={reposRequest.isLoading}
              repos={reposRequest.data || []}
            />
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
