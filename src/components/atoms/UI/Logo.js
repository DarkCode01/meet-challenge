import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export const Logo = ({ title }) => {
  return (
    <Box>
      <Text
        fontSize=""
        fontWeight="bold"
      >
        { title }
      </Text>
    </Box>
  );
};
