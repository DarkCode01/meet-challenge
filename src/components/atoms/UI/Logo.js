import React from 'react';
import propTypes from 'prop-types'
import { Box, Text } from '@chakra-ui/react';

const Logo = ({ title }) => {
  return (
    <Box>
      <Text fontSize="" fontWeight="bold">
        {title}
      </Text>
    </Box>
  );
};


Logo.propTypes = {
  title: propTypes.string.isRequired
}

export { Logo };