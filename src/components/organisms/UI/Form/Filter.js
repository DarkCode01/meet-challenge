import React from 'react';
import {
  Box,
  FormControl,
  Select,
  Flex,
  Spacer,
  Input
} from '@chakra-ui/react';

export default function Filter({ onSearch, onQuantity, onOrder }) {
  return (
    <Box
      // borderWidth=/"1px"
      padding="5px"
      borderRadius="lg"
      // overflow="hidden"
    >
      <Flex>
        <FormControl
          flex="5"
          id="first-name"
        >
          <Input
            placeholder="Nombre del usuario"
            onBlur={onSearch}
          />
        </FormControl>
        <Spacer />
        <FormControl id="first-name" flex="3">
          <Select placeholder="Cantidad" onChange={onQuantity}>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </Select>
        </FormControl>
        <Spacer />
        <FormControl id="first-name" flex="3">
          <Select placeholder="Ordenar" onChange={onOrder}>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </Select>
        </FormControl>
      </Flex>
    </Box>
  );
}
