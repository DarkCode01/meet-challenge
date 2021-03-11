import React from 'react';
import {
  // Text,
  // Center,
  Image,
  Box,
  // Badge,
  // Divider,
  // VStack,
  // Container
} from '@chakra-ui/react';
// import { StarIcon } from '@chakra-ui/icons';

export default function Details({ user }) {
  return (
    <Box
      // maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={user.avatar_url} alt={user.login} />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {user.name}
        </Box>

        <Box>{`@${user.login}`}</Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {user.followers} Seguidores
          </Box>
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {user.following} Siguiendo
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
