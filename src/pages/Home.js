import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Heading,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import UserList from 'components/organisms/User/UserList';
import Navbar from 'components/organisms/Layout/Navbar';
import Filter from 'components/organisms/UI/Form/Filter';
import ErrorNotificaiton from 'components/organisms/UI/ErrorNotificaiton';

import { useParams } from 'react-router-dom';
import { github } from 'lib/services/api';
import { useRequest } from 'lib/hooks/useRequest';
import { useFocusError } from 'lib/hooks/useFocusError';
import { useIfinityScroll } from 'lib/hooks/useInfinityScroll';

export default function Home() {
  const params = useParams();
  const [search, setSearch] = useState(params.search || 'a');
  const [order, setOrder] = useState(params.order || 'desc');
  const [page, setPage] = useState(params.page || 1);
  const [quantity, setQuantity] = useState(params.per_page || 100);

  // request
  const { isLoading, data, error, toggleError, setConcat } = useRequest({
    action: github.getUsers,
    options: {
      q: search,
      page: page,
      per_page: quantity,
      order: order
    },
  });

  // handlers
  const handlerSearch = (v) => setSearch(v.target.value);
  const handlerQuantity = (v) => setQuantity(v.target.value);
  const handlerOrder = (v) => setOrder(v.target.value);
  // const nextPage = () => setPage(p => p + 1);
  // const prevPage = () => setPage(p => p - 1);

  // auto focus on error
  useFocusError('error-notifiaciton', [error]);

  const { isBottom, setIsBottom } = useIfinityScroll();

  useEffect(() => {
    if (isBottom === true) {
      setConcat(true);
      setPage(prev => prev + 1);
      setIsBottom(false);
    }
  }, [isBottom]);
  return (

    <ChakraProvider theme={theme}>
      <Navbar title="test" />

      <Box textAlign="center" fontSize="xl">
        <ErrorNotificaiton
          isOpen={error}
          description={error}
          onClose={() => toggleError(null)}
        />
        
        <Flex padding={[0, 0, 50, 50]}>
          <Box>
            <Heading>Todos los usuarios</Heading>
          </Box>
          <Spacer />
          <Filter
            onSearch={handlerSearch}
            onQuantity={handlerQuantity}
            onOrder={handlerOrder}
          />
        </Flex>

        <Grid minH="100vh" p={3}>
          <UserList isLoading={isLoading} users={data.items || []} />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
