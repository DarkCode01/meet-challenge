import React from 'react';
import propTypes from 'prop-types';
import { Image, Box, Skeleton } from '@chakra-ui/react';

function Details({ isLoading, user }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Skeleton isLoaded={!isLoading}>
        <Image src={user.avatar_url} alt={user.login} />
      </Skeleton>

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          <Skeleton isLoaded={!isLoading}>{user.name}</Skeleton>
        </Box>

        <Box>
          <Skeleton isLoaded={!isLoading}>@{user.login}</Skeleton>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            <Skeleton isLoaded={!isLoading}>
              {user.followers} Seguidores
            </Skeleton>
          </Box>
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            <Skeleton isLoaded={!isLoading}>
              {user.following} Siguiendo
            </Skeleton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

Details.propTypes = {
  isLoading: propTypes.bool.isRequired,
  user: propTypes.objectOf({
    avatar_url: propTypes.string,
    login: propTypes.string,
    name: propTypes.string,
    followers: propTypes.number,
    following: propTypes.number,
  }),
};

export default Details;
