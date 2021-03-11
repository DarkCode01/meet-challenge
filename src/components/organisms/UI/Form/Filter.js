import React from 'react';
import {
  Box,
  FormControl,
  Select
} from '@chakra-ui/react';

export default function Filter() {
  return (
    <Box
      // borderWidth=/"1px"
      padding="5px"
      borderRadius="lg"
      // overflow="hidden"
    >
      <FormControl id="first-name">
        <Select
          placeholder="Organizar por"
          defaultValue="option1"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </FormControl>
    </Box>
  );
};
