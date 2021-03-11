import React from 'react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from 'components/organisms/UI/ColorModeSwitcher';
import { Button, Box, Text, Stack, CloseButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {!isOpen
        ? <Button>
            <HamburgerIcon />
          </Button>
        : <CloseButton /> 
      }
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
        <MenuItem to="#">
          <ColorModeSwitcher />
        </MenuItem>
      </Stack>
    </Box>
  );
};
