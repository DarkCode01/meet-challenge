import React from 'react';
import {
  Box,
  FormControl,
  Select
} from '@chakra-ui/react';

export default function Filter({ handleChange }) {
  return (
    <Box
      // borderWidth=/"1px"
      padding="5px"
      borderRadius="lg"
      // overflow="hidden"
    >
      
      <FormControl id="first-name">
        <Select
          placeholder="Cantidad"
          onChange={handleChange}
        >
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </Select>
      </FormControl>
    </Box>
  );
};
