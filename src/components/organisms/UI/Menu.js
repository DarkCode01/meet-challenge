import React from 'react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from 'ColorModeSwitcher';
import { Box, Text, Stack, Button, FormControl, Input } from '@chakra-ui/react';

export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? '0' : 'x'}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Link to={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export const Menu = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <FormControl id="first-name" isRequired>
          <Input placeholder="Nombre del repositorio" />
        </FormControl>
        <MenuItem to="/signup" isLast>
          <Button
            size="sm"
            rounded="md"
            // color={["primary.500", "primary.500", "white", "white"]}
            // bg={["white", "white", "primary.500", "primary.500"]}
            // _hover={{
            //   bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
            // }}
          >
            Who is?
          </Button>
        </MenuItem>
        <MenuItem to="#">
          <ColorModeSwitcher />
        </MenuItem>
      </Stack>
    </Box>
  );
};
