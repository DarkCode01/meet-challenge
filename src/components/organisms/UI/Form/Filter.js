import React from 'react';
import propTypes from 'prop-types';
import {
  Box,
  FormControl,
  Select,
  Flex,
  Spacer,
  Input
} from '@chakra-ui/react';

function Filter({ onSearch, onQuantity, onOrder }) {
  return (
    <Box
      padding="5px"
      borderRadius="lg"
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

Filter.propTypes = {
  onSearch: propTypes.func.isRequired,
  onQuantity: propTypes.func.isRequired,
  onOrder: propTypes.func.isRequired,
}

export default Filter;
